export default function HomePage() {
  return (
    <>
      <header className="bg-white px-4 py-4">
        <p className="text-xl font-bold text-[#1a2a52]">BOXPACK</p>
      </header>

      <section className="bg-[#1a2a52] px-4 py-12 text-white">
        <h1 className="text-3xl font-bold">
          Фулфилмент, который держит сроки и репутацию
        </h1>
        <p className="mt-4 text-sm text-white/80">
          Берём на себя хранение, сборку и отправку ваших заказов.
        </p>
        <a href="#" className="mt-4 inline-block text-sm underline">
          Рассчитать стоимость
        </a>
        <button className="mt-4 block rounded bg-[#7dd3fc] px-4 py-2 text-sm text-[#1a2a52]">
          Подробнее
        </button>

        <div className="mt-8 flex gap-4">
          <div className="rounded bg-white/10 p-3">
            <p className="text-xl font-bold">500+</p>
            <p className="text-xs">клиентов</p>
          </div>
          <div className="rounded bg-white/10 p-3">
            <p className="text-xl font-bold">99%</p>
            <p className="text-xs">вовремя</p>
          </div>
        </div>

      </section>

      <section className="px-4 py-12">
        <h2 className="text-center text-2xl font-bold text-[#1a2a52]">
          Как начать работать с нами
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded bg-[#f0f0f0] p-4">
            <p className="text-xs font-bold">ШАГ 1</p>
            <h3 className="mt-1 text-sm">Оставляете заявку</h3>
          </div>
          <div className="rounded bg-[#f0f0f0] p-4">
            <p className="text-xs font-bold">ШАГ 2</p>
            <h3 className="mt-1 text-sm">Получаете расчёт</h3>
          </div>
          <div className="rounded bg-[#f0f0f0] p-4">
            <p className="text-xs font-bold">ШАГ 3</p>
            <h3 className="mt-1 text-sm">Заключаете договор</h3>
          </div>
          <div className="rounded bg-[#f0f0f0] p-4">
            <p className="text-xs font-bold">ШАГ 4</p>
            <h3 className="mt-1 text-sm">Передаёте товар</h3>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f8] px-4 py-12">
        <h2 className="text-center text-2xl font-bold text-[#1a2a52]">
          Услуги фулфилмента
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold">Хранение товаров</h3>
          </div>
          <div className="rounded bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold">Сборка заказов</h3>
          </div>
          <div className="rounded bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold">Доставка</h3>
          </div>
        </div>
      </section>

    </>
  );
}

