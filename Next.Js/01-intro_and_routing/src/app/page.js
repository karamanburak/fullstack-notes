//? app folder içindeki page.js "/" route olan home sayfasıdır

//? nextjs'de tüm componentler default olarak server componenttir. client component kullanmak için "use-client" direktifini kullanmamız gerekir

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Next Js</h1>
    </main>
  );
}
