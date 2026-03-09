'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Lead, LeadStatus } from '@/types';
import LeadPipeline from '@/components/leads/LeadPipeline';

export default function PipelinePage() {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    const { data } = await supabase.from('leads').select('*').order('created_at', { ascending: false });
    if (data) setLeads(data);
  };

  const handleUpdateStatus = async (id: string, status: LeadStatus) => {
    await supabase.from('leads').update({ status }).eq('id', id);
    fetchLeads();
  };

  return (
    <div className="p-10 max-w-[1600px] mx-auto min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Sales Pipeline</h1>
        <p className="text-slate-500 font-medium text-sm mt-1">
          Drag leads between stages to update their status
        </p>
      </header>

      <LeadPipeline leads={leads} onMoveLead={handleUpdateStatus} />
    </div>
  );
}
