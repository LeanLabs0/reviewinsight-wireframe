import {
  RSection,
  RContainer,
  WireHeading,
  WireText,
  WireNavbar,
  WireFooter,
  WireDivider,
} from "./Wire";

/**
 * ReviewInsightCategoriesV2.tsx: ReviewInsight categories listing wireframe.
 *
 * Category names and vendor counts come from the ReviewInsight data pull and
 * from the industry list the network publishes, so they stay unbound. Only
 * hand-written prose carries a copyId.
 */

const RATED = [
  { name: "Marketing Automation", vendors: 8 },
  { name: "Project Management", vendors: 8 },
  { name: "Digital Marketing", vendors: 8 },
];

const PLANNED = [
  "HR Technology", "Telecommunications", "Agriculture", "Accounting",
  "Artificial Intelligence", "Automotive", "Biotech", "Cleantech",
  "Cloud Computing", "Construction", "Cybersecurity", "Developer Tools",
  "E-commerce", "Energy", "Financial Services", "Fintech", "Healthcare",
  "Information Services", "Legal Technology", "Logistics", "Manufacturing",
  "Pharmaceuticals", "Procurement", "Professional Training", "Public Relations",
  "Real Estate Technology", "Retail", "Robotics", "SaaS", "Sales Enablement",
  "Staffing",
];

/* ---------- Header ---------- */

const HeaderSection = () => (
  <RSection size="md" bg="white" sectionName="header">
    <RContainer className="max-w-3xl">
      <WireHeading level={1} copyId="reviewinsight.categories.title" className="mb-4">
        Categories
      </WireHeading>
      <WireText copyId="reviewinsight.categories.lede" className="text-lg text-gray-600">
        Two categories carry rated companies today. The rest of the industry list has a page
        each, so you can see what is planned, but nothing is published for an industry until
        every company in it has been read.
      </WireText>
    </RContainer>
  </RSection>
);

/* ---------- Rated ---------- */

const RatedSection = () => (
  <RSection bg="light" sectionName="rated">
    <RContainer className="max-w-4xl">
      <WireHeading level={2} copyId="reviewinsight.categories.rated.title" className="mb-6">
        Rated
      </WireHeading>
      <div className="grid gap-px bg-gray-200 md:grid-cols-3">
        {RATED.map((c) => (
          <div key={c.name} className="bg-white p-6">
            <p className="font-semibold text-gray-900">{c.name}</p>
            <p className="mt-1 text-sm text-gray-500">{c.vendors} vendors</p>
          </div>
        ))}
      </div>
    </RContainer>
  </RSection>
);

/* ---------- Not yet rated ---------- */

const PlannedSection = () => (
  <RSection bg="white" sectionName="planned">
    <RContainer className="max-w-4xl">
      <WireHeading level={2} copyId="reviewinsight.categories.planned.title" className="mb-3">
        Not yet rated
      </WireHeading>
      <WireText copyId="reviewinsight.categories.planned.lede" className="mb-6 text-gray-600">
        32 industries on the network list.
      </WireText>
      <div className="grid gap-px bg-gray-200 sm:grid-cols-2 md:grid-cols-3">
        {PLANNED.map((c) => (
          <div key={c} className="bg-white px-5 py-4">
            <p className="text-sm text-gray-700">{c}</p>
            <p className="mt-0.5 text-xs text-gray-400">not yet rated</p>
          </div>
        ))}
      </div>
    </RContainer>
  </RSection>
);

/* ---------- Page ---------- */

export default function ReviewInsightCategoriesV2() {
  return (
    <>
      <WireNavbar
        logoSpec={{ kind: "wordmark", text: "ReviewInsight" }}
        links={["Categories", "Vendors", "Methodology", "Quarterly index"]}
        cta={false}
      />
      <HeaderSection />
      <RatedSection />
      <PlannedSection />
      <WireDivider />
      <WireFooter />
    </>
  );
}
