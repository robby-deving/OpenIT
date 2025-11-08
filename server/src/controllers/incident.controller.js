const { supabase } = require('../config/supabase.js');

exports.getIncidents = async (req, res) => {
  try {
    const { data, error } = await supabase.from('incidents').select('*');
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching incidents:', error.message);
    res.status(500).json({ error: 'Failed to fetch incidents' });
  }
};

exports.getIncidentById = async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('incidents')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching incident:', error.message);
    res.status(500).json({ error: 'Failed to fetch incident' });
  }
};

exports.createIncident = async (req, res) => {
  const { incident_types_id, location, content, name } = req.body;

  if (!incident_types_id || !location || !content || !name) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const { data, error } = await supabase
      .from('incidents')
      .insert([{ incident_types_id, location, content, name }])
      .select()
      .single();

    if (error) throw error;
    res.status(201).json(data);
  } catch (error) {
    console.error('Error creating incident:', error.message);
    res.status(500).json({ error: 'Failed to create incident' });
  }
};

exports.updateIncident = async (req, res) => {
  const { id } = req.params;
  const { incident_types_id, location, content, name } = req.body;

  try {
    const { data, error } = await supabase
      .from('incidents')
      .update({ incident_types_id, location, content, name, updated_at: new Date() })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    console.error('Error updating incident:', error.message);
    res.status(500).json({ error: 'Failed to update incident' });
  }
};

exports.deleteIncident = async (req, res) => {
  const { id } = req.params;

  try {
    const { error } = await supabase.from('incidents').delete().eq('id', id);
    if (error) throw error;
    res.status(200).json({ message: 'Incident deleted successfully' });
  } catch (error) {
    console.error('Error deleting incident:', error.message);
    res.status(500).json({ error: 'Failed to delete incident' });
  }
};
