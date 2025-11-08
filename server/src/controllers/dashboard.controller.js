// controllers/dashboard.controller.js
const { supabase } = require('../config/supabase.js');

exports.getDashboardData = async (req, res) => {
  const { incident_types_id } = req.params;

  try {
    // Total incidents by year
    const { data: yearlyData, error: yearlyError } = await supabase
      .from('incidents')
      .select('id, created_at')
      .eq('incident_types_id', incident_types_id);

    if (yearlyError) throw yearlyError;

    const totalsByYear = {};
    yearlyData.forEach((item) => {
      const year = new Date(item.created_at).getFullYear();
      totalsByYear[year] = (totalsByYear[year] || 0) + 1;
    });

    // Total incidents by month (for current year)
    const currentYear = new Date().getFullYear();
    const totalsByMonth = {};
    yearlyData
      .filter((item) => new Date(item.created_at).getFullYear() === currentYear)
      .forEach((item) => {
        const month = new Date(item.created_at).toLocaleString('default', { month: 'long' });
        totalsByMonth[month] = (totalsByMonth[month] || 0) + 1;
      });

    // Most recent notification (latest event)
    const { data: latestNotification, error: notifError } = await supabase
      .from('notifications')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1);

    if (notifError) throw notifError;

    const recentEvent = latestNotification.length > 0 ? {
      title: latestNotification[0].title,
      message: latestNotification[0].message,
      location: latestNotification[0].location,
      latitude: latestNotification[0].latitude,
      longitude: latestNotification[0].longitude,
      magnitude: latestNotification[0].magnitude_threshold,
      created_at: latestNotification[0].created_at,
    } : null;

    // Dynamic label by incident type
    const typeMap = {
      1: 'Earthquakes',
      2: 'Floods',
      3: 'Typhoons',
      4: 'Fires',
    };

    res.status(200).json({
      success: true,
      type: typeMap[incident_types_id] || 'Unknown',
      totalsByYear,
      totalsByMonth,
      mostRecent: recentEvent,
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error.message);
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
};