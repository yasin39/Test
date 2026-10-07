import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface KvkkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KvkkModal: React.FC<KvkkModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252827]/40 backdrop-blur-xs">
      <div className="bg-[#FFFFFF] border border-[#DDD7CB] rounded-[8px] max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#6B7270] hover:text-[#252827] rounded-[4px] hover:bg-[#E9E4D9]"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="label-editorial text-[#6B7270] mb-1">
          HUKUKİ BİLGİLENDİRME
        </div>
        <h3 className="font-heading text-xl font-bold text-[#164A4A] mb-4">
          KVKK ve Hasta Mahremiyeti Aydınlatma Metni
        </h3>

        <div className="space-y-4 text-xs text-[#252827] leading-relaxed">
          <p>
            AnkaraRefakat Sağlık ve Refakat Hizmetleri olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve Hasta Hakları Yönetmeliği hükümleri uyarınca hastalarımızın ve hasta yakınlarımızın özel hayatının gizliliğine en yüksek derecede riayet ediyoruz.
          </p>

          <div className="p-3 bg-[#F7F4EE] rounded-[4px] border border-[#DDD7CB]">
            <h4 className="font-semibold text-[#164A4A] uppercase text-[11px] mb-1">
              1. Veri Sorumlusu ve Amacı
            </h4>
            <p>
              Toplanan hasta adı, klinik teşhis notları, yattığı hastane ve servis bilgileri yalnızca refakatçimizin güvenli eşleştirilmesi, vizit takibi ve aileye günlük durum raporu iletilmesi amacıyla işlenmektedir.
            </p>
          </div>

          <div className="p-3 bg-[#F7F4EE] rounded-[4px] border border-[#DDD7CB]">
            <h4 className="font-semibold text-[#164A4A] uppercase text-[11px] mb-1">
              2. Personel Gizlilik Sözleşmesi
            </h4>
            <p>
              Kadromuzdaki tüm onaylı refakatçilerimiz, hastanede şahit oldukları tıbbi, ailesel ve mahrem bilgileri üçüncü şahıslarla paylaşmayacaklarına dair cezai şart içeren gizlilik taahhütnamesi imzalamıştır.
            </p>
          </div>

          <div className="p-3 bg-[#F7F4EE] rounded-[4px] border border-[#DDD7CB]">
            <h4 className="font-semibold text-[#164A4A] uppercase text-[11px] mb-1">
              3. Haklarınız
            </h4>
            <p>
              KVKK’nın 11. maddesi kapsamında dilediğiniz zaman verilerinizin silinmesini, güncellenmesini veya işlenme amacını öğrenmeyi talep edebilirsiniz.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#DDD7CB] text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#164A4A] hover:bg-[#236565] text-[#F7F4EE] text-xs font-semibold rounded-[4px]"
          >
            Anladım, Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
