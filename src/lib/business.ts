// Horário de funcionamento da loja (Av. Afonso Pena, 981).
// Fonte única para o texto exibido no site e para o schema.org.

export const OPENING_HOURS = [
  { label: "Segunda a sexta", value: "9h às 18h" },
  { label: "Sábado", value: "9h às 12h" },
  { label: "Domingo", value: "Fechado" },
];

export const OPENING_HOURS_SCHEMA = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "09:00",
    closes: "12:00",
  },
];
