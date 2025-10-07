import { createClient } from '@supabase/supabase-js';

// Supabase configuration - replace with your actual project details
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key-here';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database operations for email collection
export async function addEmail(emailData) {
  try {
    const { data, error } = await supabase
      .from('emails')
      .insert([
        {
          email: emailData.email,
          timestamp: emailData.timestamp,
          ip_address: emailData.ip_address,
          user_agent: emailData.user_agent
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      throw error;
    }

    console.log('Email saved to Supabase:', data);
    return data;
  } catch (error) {
    console.error('Error saving email to Supabase:', error);
    throw error;
  }
}

export async function getEmails() {
  try {
    const { data, error } = await supabase
      .from('emails')
      .select('*')
      .order('timestamp', { ascending: false });

    if (error) {
      console.error('Supabase select error:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching emails from Supabase:', error);
    throw error;
  }
}

export async function clearAllEmails() {
  try {
    // Get count before deleting
    const { count } = await supabase
      .from('emails')
      .select('*', { count: 'exact', head: true });

    // Delete all records
    const { error } = await supabase
      .from('emails')
      .delete()
      .neq('id', 0); // Delete all records

    if (error) {
      console.error('Supabase delete error:', error);
      throw error;
    }

    console.log(`Deleted ${count} email records from Supabase`);
    return count || 0;
  } catch (error) {
    console.error('Error clearing emails from Supabase:', error);
    throw error;
  }
}

export function calculateStats(emails) {
  const now = new Date();
  const today = now.toISOString().split('T')[0];
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return {
    total: emails.length,
    today: emails.filter(email => 
      email.timestamp.split('T')[0] === today
    ).length,
    week: emails.filter(email => 
      new Date(email.timestamp) > oneWeekAgo
    ).length
  };
}
