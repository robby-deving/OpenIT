const { supabase } = require('../config/supabase.js');

exports.getDashboardData = async (req, res) => {
  const { incident_types_id } = req.params;

  try {
    const { data, error } = await supabase
      .from('incidents')
      .select('*')
      .eq('incident_types_id', incident_types_id);

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching dashboard data:', error.message);
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
};