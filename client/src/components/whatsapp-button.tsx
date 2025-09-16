export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/919359365622?text=Hello%20Earthly%20Plates%20International!%20I'm%20interested%20in%20your%20eco-friendly%20tableware%20products.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-sticky bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      data-testid="button-whatsapp"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
}
