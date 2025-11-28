import { MapPin, Mountain, Users, Utensils } from 'lucide-react';
import { useSeoMeta } from '../hooks/useSeoMeta';

const InfoCards = () => {
  useSeoMeta({
    title: 'Detaylı Bilgiler',
    description: 'Mahmatlı Köyü\'nin idari statüsü, coğrafi konumu, iklimi, nüfusu ve kültürel özellikleri hakkında kapsamlı bilgi. Yemekleri ve gelenekleri.'
  });
  const cards = [
    {
      id: 1,
      icon: MapPin,
      title: 'İdari Statü ve Konum',
      items: [
        { label: 'Bağlı Olduğu İlçe', value: 'Kelkit / Gümüşhane' },
        { label: 'İdari Durum', value: 'Mahmatlı\, Kelkit ilçesine bağlı bir mahalle statüsündedir ve yerel yönetim hizmetleri köyün muhtarı Sayın Yakup Gül tarafından yürütülmektedir.' },
        { label: 'Coğrafi Konum', value: 'Kelkit ilçe merkezinin güneyinde, Kelkit-Erzincan karayolu güzergahına yakın' },
        { label: 'Uzaklık', value: 'Kelkit\'e 10-12 km, Gümüşhane\'ye 85-90 km' },
      ],
    },
    {
      id: 2,
      icon: Mountain,
      title: 'Coğrafi Özellikler ve İklim',
      items: [
        { label: 'Rakım', value: '1.500 - 1.600 metre' },
        { label: 'Arazi Yapısı', value: 'Kelkit Havzası özellikleri, düzlük tarım alanları, tepelerle çevrili bozkır bitki örtüsü' },
        { label: 'İklim', value: 'Karasal iklim - kışlar soğuk ve kar yağışlı, yazlar sıcak ve kurak' },
      ],
    },
    {
      id: 3,
      icon: Users,
      title: 'Nüfus ve Sosyal Yapı',
      items: [
        { label: 'Nüfus Eğilimi', value: 'Büyük şehirlere göç, kış nüfusu az, yaz nüfusu gurbetçilerle artar' },
        { label: 'Güncel Nüfus', value: '100-300 kişi (yerleşik nüfus tahmini)' },
        { label: 'Sosyal Yaşam', value: 'Güçlü akrabalık bağları, imece usulü dayanışma kültürü' },
      ],
    },
    {
      id: 4,
      icon: Utensils,
      title: 'Kültür ve Yemek',
      items: [
        { label: 'Yemekler', value: 'Siron, Haşıl, Lemis, Ketesi, Kelkit Döneri' },
        { label: 'Gelenekler', value: 'Köy odası sohbetleri, yayla geleneği' },
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
          Detaylı Bilgiler
        </h2>
        <div className="w-20 h-1 bg-[#1B3400] mx-auto mb-8 sm:mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#1B3400] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{card.title}</h3>
                </div>

                <div className="space-y-3">
                  {card.items.map((item, index) => (
                    <div key={index} className="border-l-2 border-gray-200 pl-4">
                      <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm sm:text-base text-gray-800">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
