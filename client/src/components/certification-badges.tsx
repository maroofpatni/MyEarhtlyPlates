export default function CertificationBadges() {
  const certifications = [
    { icon: "fas fa-leaf", name: "FSC", color: "text-primary" },
    { icon: "fas fa-award", name: "ISO 9001", color: "text-primary" },
    { icon: "fas fa-shield-alt", name: "FSSC 22000", color: "text-primary" },
    { icon: "fas fa-flag-usa", name: "USDA", color: "text-primary" },
    { icon: "fas fa-people-carry", name: "BSCI", color: "text-primary" },
    { icon: "fas fa-lock", name: "CTPAT", color: "text-primary" },
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-8" data-testid="certification-badges">
      <h3 className="text-2xl font-bold text-center mb-8">Trusted Certifications & Standards</h3>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className="certification-badge text-center p-4 border border-border rounded-lg"
            data-testid={`certification-${cert.name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <i className={`${cert.icon} ${cert.color} text-2xl mb-2`}></i>
            <p className="font-medium text-sm">{cert.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
