import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-[#11E3A8A] to-[#3651b8] p-8 text-white">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Icon name="Calculator" size={40} className="text-white" />
                  <h1 className="text-3xl font-bold">Прошивка ККТ</h1>
                </div>
                <Badge variant="destructive" className="text-sm px-3 py-1">
                  Обязательно
                </Badge>
              </div>
              <p className="text-lg opacity-95">
                Требования ФНС с 1 сентября 2025 года
              </p>
            </div>

            <div className="p-8 space-y-6">
              <div className="bg-white rounded-lg border-2 border-[#11E3A8A] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="FileCheck" size={28} className="text-[#11E3A8A]" />
                  <h2 className="text-xl font-bold text-slate-800">
                    Основные требования налоговой
                  </h2>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#11E3A8A] mt-0.5 flex-shrink-0" />
                    <span>Обновление программного обеспечения до версии ФФД 1.2</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#11E3A8A] mt-0.5 flex-shrink-0" />
                    <span>Подключение к личному кабинету оператора фискальных данных</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#11E3A8A] mt-0.5 flex-shrink-0" />
                    <span>Настройка автоматической передачи чеков в ФНС</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-[#11E3A8A] mt-0.5 flex-shrink-0" />
                    <span>Регистрация новых фискальных накопителей (срок действия ФН)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg border-2 border-amber-500 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Calendar" size={28} className="text-amber-600" />
                  <h2 className="text-xl font-bold text-slate-800">
                    Важные даты и дедлайны
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 pb-3 border-b">
                    <div className="bg-amber-100 rounded-lg p-3 min-w-[80px] text-center">
                      <div className="text-2xl font-bold text-amber-700">01.09</div>
                      <div className="text-xs text-amber-600">2025</div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-800">Начало действия новых требований</p>
                      <p className="text-sm text-slate-600">Обязательная прошивка всех касс</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pb-3 border-b">
                    <div className="bg-amber-100 rounded-lg p-3 min-w-[80px] text-center">
                      <div className="text-2xl font-bold text-amber-700">01.11</div>
                      <div className="text-xs text-amber-600">2025</div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-800">Завершение переходного периода</p>
                      <p className="text-sm text-slate-600">Начало проверок и санкций</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-red-100 rounded-lg p-3 min-w-[80px] text-center">
                      <div className="text-2xl font-bold text-red-700">01.12</div>
                      <div className="text-xs text-red-600">2025</div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-800">Полное вступление в силу</p>
                      <p className="text-sm text-slate-600">Максимальные штрафы за нарушения</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg border-2 border-red-500 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="AlertTriangle" size={28} className="text-red-600" />
                  <h2 className="text-xl font-bold text-red-900">
                    Санкции за несоблюдение требований
                  </h2>
                </div>
                <div className="space-y-3 text-slate-800">
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <Icon name="AlertCircle" size={20} className="text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Для организаций</p>
                      <p className="text-sm text-slate-600">Штраф от 30 000 до 50 000 рублей</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <Icon name="AlertCircle" size={20} className="text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Для индивидуальных предпринимателей</p>
                      <p className="text-sm text-slate-600">Штраф от 10 000 до 20 000 рублей</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <Icon name="XCircle" size={20} className="text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">При повторных нарушениях</p>
                      <p className="text-sm text-slate-600">Блокировка ККТ и приостановка деятельности на срок до 90 дней</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#11E3A8A] bg-opacity-10 rounded-lg p-6 border-l-4 border-[#11E3A8A]">
                <div className="flex items-start gap-3">
                  <Icon name="Info" size={24} className="text-[#11E3A8A] mt-1 flex-shrink-0" />
                  <div className="text-sm text-slate-700">
                    <p className="font-semibold mb-2">Рекомендация:</p>
                    <p>
                      Обратитесь к сертифицированному специалисту по обслуживанию ККТ для своевременной прошивки
                      и настройки оборудования. Это поможет избежать санкций и обеспечит бесперебойную работу вашего бизнеса.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 p-6 text-center text-sm text-slate-600">
              <p>© 2025 Федеральная налоговая служба Российской Федерации</p>
              <p className="mt-1">Информация актуальна на январь 2025 года</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
