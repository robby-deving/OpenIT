//locations.controller.js
const { supabase } = require ('../config/supabase.js');

/**
 * Get all locations
 */
const getAllNotifications = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

/**
 * Get Notification by Id
 */
const getNotificationById = async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(404).json({ success: false, error: 'Notification not found' });
  }
};

/**
 * Create a Notification
 */
const createNotification = async (req, res) => {
  try {
    const { title, message, location, magnitude_threshold } = req.body;

    const { data, error } = await supabase
      .from('notifications')
      .insert([{ title, message, location, magnitude_threshold }])
      .select('*');

    if (error) throw error;

    res.status(201).json({
      success: true,
      message: 'Notification created successfully',
      data: data[0],
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
/**
 * Update Notification
 */
const updateNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const { data, error } = await supabase
      .from('notifications')
      .update(updates)
      .eq('id', id)
      .select('*');

    if (error) throw error;

    res.status(200).json({
      success: true,
      message: 'Notification updated successfully',
      data: data[0],
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
/**
 * Delete Notification
 */
const deleteNotification = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase.from('notifications').delete().eq('id', id);

    if (error) throw error;

    res.status(200).json({
      success: true,

    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  } 
};
module.exports = {
  getAllNotifications,
  getNotificationById,
  createNotification,
  updateNotification,
  deleteNotification,
};
