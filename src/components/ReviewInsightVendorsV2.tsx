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
 * ReviewInsightVendorsV2.tsx: ReviewInsight vendor listing wireframe.
 *
 * Every row comes from the ReviewInsight data pull, so the table stays
 * unbound and regenerates with the source. Only hand-written prose carries a
 * copyId. WebFX shows NR because no platform pair passed the rating floor.
 */

type Row = {
  name: string;
  category: string;
  rating: number | null;
  reviews: number;
  platforms: number;
  gap: number;
};

const ROWS: Row[] = [
  { name: "ClickUp", category: "Project Management", rating: 87, reviews: 19713, platforms: 5, gap: 0.7 },
  { name: "Brevo", category: "Marketing Automation", rating: 83, reviews: 13484, platforms: 4, gap: 0.6 },
  { name: "SmartSites", category: "Digital Marketing", rating: 80, reviews: 1266, platforms: 3, gap: 0.8 },
  { name: "Wrike", category: "Project Management", rating: 79, reviews: 9539, platforms: 4, gap: 0.8 },
  { name: "Ignite Visibility", category: "Digital Marketing", rating: 76, reviews: 296, platforms: 2, gap: 0.1 },
  { name: "Mailchimp", category: "Marketing Automation", rating: 76, reviews: 25840, platforms: 4, gap: 1.9 },
  { name: "NinjaPromo", category: "Digital Marketing", rating: 76, reviews: 181, platforms: 3, gap: 0.8 },
  { name: "Thrive Internet Marketing Agency", category: "Digital Marketing", rating: 76, reviews: 150, platforms: 2, gap: 0.2 },
  { name: "ActiveCampaign", category: "Marketing Automation", rating: 73, reviews: 18870, platforms: 4, gap: 1.8 },
  { name: "Coalition Technologies", category: "Digital Marketing", rating: 73, reviews: 186, platforms: 2, gap: 1.0 },
  { name: "Notion", category: "Project Management", rating: 72, reviews: 17210, platforms: 5, gap: 2.4 },
  { name: "monday.com", category: "Project Management", rating: 72, reviews: 27962, platforms: 4, gap: 2.4 },
  { name: "Basecamp", category: "Project Management", rating: 71, reviews: 19963, platforms: 3, gap: 2.0 },
  { name: "Lounge Lizard", category: "Digital Marketing", rating: 71, reviews: 376, platforms: 3, gap: 0.8 },
  { name: "Iterable", category: "Marketing Automation", rating: 67, reviews: 1214, platforms: 4, gap: 0.3 },
  { name: "Klaviyo", category: "Marketing Automation", rating: 66, reviews: 2429, platforms: 4, gap: 3.0 },
  { name: "HubSpot Marketing Hub", category: "Marketing Automation", rating: 65, reviews: 24997, platforms: 4, gap: 3.0 },
  { name: "Smartsheet", category: "Project Management", rating: 65, reviews: 29185, platforms: 4, gap: 3.2 },
  { name: "Braze", category: "Marketing Automation", rating: 64, reviews: 2322, platforms: 4, gap: 1.9 },
  { name: "Disruptive Advertising", category: "Digital Marketing", rating: 64, reviews: 667, platforms: 3, gap: 1.5 },
  { name: "Asana", category: "Project Management", rating: 62, reviews: 30237, platforms: 4, gap: 3.0 },
  { name: "Jira", category: "Project Management", rating: 60, reviews: 31446, platforms: 4, gap: 3.2 },
  { name: "Adobe Marketo Engage", category: "Marketing Automation", rating: 57, reviews: 4973, platforms: 4, gap: 1.9 },
  { name: "WebFX", category: "Digital Marketing", rating: null, reviews: 468, platforms: 2, gap: 2.3 },
];

/* ---------- Header ---------- */

const HeaderSection = () => (
  <RSection size="md" bg="white" sectionName="header">
    <RContainer className="max-w-3xl">
      <WireHeading level={1} copyId="reviewinsight.vendors.title" className="mb-4">
        All vendors
      </WireHeading>
      <WireText copyId="reviewinsight.vendors.lede" className="text-lg text-gray-600">
        Every vendor we currently read, with the size of its review base and how far the
        platforms disagree.
      </WireText>
    </RContainer>
  </RSection>
);

/* ---------- Table ---------- */

const TableSection = () => (
  <RSection bg="light" sectionName="vendors">
    <RContainer className="max-w-5xl">
      <div className="overflow-x-auto border border-gray-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="px-5 py-3 font-semibold text-gray-900">Rating</th>
              <th className="px-5 py-3 font-semibold text-gray-900">Company</th>
              <th className="px-5 py-3 font-semibold text-gray-900">Category</th>
              <th className="px-5 py-3 text-right font-semibold text-gray-900">Reviews</th>
              <th className="px-5 py-3 text-right font-semibold text-gray-900">Platforms</th>
              <th className="px-5 py-3 text-right font-semibold text-gray-900">Rating gap</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.name} className="border-b border-gray-200">
                <td className="px-5 py-3 font-bold text-gray-900">{r.rating ?? "NR"}</td>
                <td className="px-5 py-3 font-semibold text-gray-900">{r.name}</td>
                <td className="px-5 py-3 text-gray-500">{r.category}</td>
                <td className="px-5 py-3 text-right text-gray-700">
                  {r.reviews.toLocaleString("en-US")}
                </td>
                <td className="px-5 py-3 text-right text-gray-700">{r.platforms}</td>
                <td className="px-5 py-3 text-right text-gray-700">{r.gap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </RContainer>
  </RSection>
);

/* ---------- Page ---------- */

export default function ReviewInsightVendorsV2() {
  return (
    <>
      <WireNavbar
        logoSpec={{ kind: "wordmark", text: "ReviewInsight" }}
        links={["Categories", "Vendors", "Methodology", "Quarterly index"]}
        cta={false}
      />
      <HeaderSection />
      <TableSection />
      <WireDivider />
      <WireFooter />
    </>
  );
}
