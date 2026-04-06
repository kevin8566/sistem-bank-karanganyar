import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Data simulasi FAQ (nantinya bisa diganti dari API Backend jika perlu)
const faqData = [
  {
    question: "Hal-hal dasar apa yang perlu diketahui?",
    answer: "Layanan Aduan dan Informasi Terpadu Bank Karanganyar dirancang untuk memudahkan nasabah menyampaikan keluhan atau meminta informasi tanpa perlu datang ke kantor cabang. Siapkan NIK atau Nomor Rekening Anda untuk proses yang lebih cepat."
  },
  {
    question: "Berapa lama proses penyelesaian aduan?",
    answer: "Sesuai standar operasional perbankan, aduan ringan akan diselesaikan dalam 1-3 hari kerja. Untuk kasus kompleks yang membutuhkan investigasi mendalam, maksimal 20 hari kerja."
  },
  {
    question: "Apakah saya perlu login untuk membuat tiket?",
    answer: "Tidak. Anda bisa langsung mengisi formulir dengan memasukkan data diri yang valid. Sistem kami akan melakukan verifikasi melalui nomor WhatsApp yang terdaftar."
  }
];

const FAQSection: React.FC = () => {
  // State untuk melacak indeks pertanyaan yang sedang terbuka (null = semua tertutup)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">FAQ</h2>
          <p className="text-gray-600">Pertanyaan yang sering diajukan terkait layanan kami.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <span className="text-left font-semibold text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-bank-blue flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {/* Area Jawaban (Hanya tampil jika index cocok) */}
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;