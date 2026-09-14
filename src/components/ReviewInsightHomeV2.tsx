import { useState } from "react";
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
 * ReviewInsightHomeV2.tsx: ReviewInsight home page wireframe.
 *
 * Company names, ratings, part values and counts all come from the
 * ReviewInsight data pull, so they are left unbound and regenerate with the
 * source file. Only hand-written prose carries a copyId.
 */

type Vendor = {
  slug: string;
  name: string;
  category: string;
  rating: number | null;
  reviews: number;
  platforms: number;
  avg: number | null;
  reliable: number | null;
  recent: number | null;
  result: number | null;
};

const VENDORS: Vendor[] = [
  { slug: "clickup", name: "ClickUp", category: "Project Management", rating: 87, reviews: 19713, platforms: 5, avg: 92, reliable: 82, recent: 98, result: 76 },
  { slug: "brevo", name: "Brevo", category: "Marketing Automation", rating: 83, reviews: 13484, platforms: 4, avg: 85, reliable: 82, recent: 97, result: 68 },
  { slug: "smartsites", name: "SmartSites", category: "Digital Marketing", rating: 80, reviews: 1266, platforms: 3, avg: 98, reliable: 66, recent: 97, result: 60 },
  { slug: "wrike", name: "Wrike", category: "Project Management", rating: 79, reviews: 9539, platforms: 4, avg: 86, reliable: 75, recent: 70, result: 85 },
  { slug: "ignite-visibility", name: "Ignite Visibility", category: "Digital Marketing", rating: 76, reviews: 296, platforms: 2, avg: 95, reliable: 68, recent: 84, result: 55 },
  { slug: "mailchimp", name: "Mailchimp", category: "Marketing Automation", rating: 76, reviews: 25840, platforms: 4, avg: 87, reliable: 34, recent: 96, result: 87 },
  { slug: "ninjapromo", name: "NinjaPromo", category: "Digital Marketing", rating: 76, reviews: 181, platforms: 3, avg: 93, reliable: 66, recent: 91, result: 53 },
  { slug: "thrive-internet-marketing-agency", name: "Thrive Internet Marketing Agency", category: "Digital Marketing", rating: 76, reviews: 150, platforms: 2, avg: 91, reliable: 67, recent: 92, result: 56 },
  { slug: "activecampaign", name: "ActiveCampaign", category: "Marketing Automation", rating: 73, reviews: 18870, platforms: 4, avg: 86, reliable: 37, recent: 96, result: 71 },
  { slug: "coalition-technologies", name: "Coalition Technologies", category: "Digital Marketing", rating: 73, reviews: 186, platforms: 2, avg: 94, reliable: 48, recent: 64, result: 85 },
  { slug: "notion", name: "Notion", category: "Project Management", rating: 72, reviews: 17210, platforms: 5, avg: 91, reliable: 19, recent: 98, result: 80 },
  { slug: "monday-com", name: "monday.com", category: "Project Management", rating: 72, reviews: 27962, platforms: 4, avg: 88, reliable: 19, recent: 94, result: 87 },
  { slug: "basecamp", name: "Basecamp", category: "Project Management", rating: 71, reviews: 19963, platforms: 3, avg: 85, reliable: 26, recent: 85, result: 88 },
  { slug: "lounge-lizard", name: "Lounge Lizard", category: "Digital Marketing", rating: 71, reviews: 376, platforms: 3, avg: 92, reliable: 66, recent: 78, result: 48 },
  { slug: "iterable", name: "Iterable", category: "Marketing Automation", rating: 67, reviews: 1214, platforms: 4, avg: 88, reliable: 86, recent: 65, result: 30 },
  { slug: "klaviyo", name: "Klaviyo", category: "Marketing Automation", rating: 66, reviews: 2429, platforms: 4, avg: 83, reliable: 7, recent: 90, result: 82 },
  { slug: "hubspot-marketing-hub", name: "HubSpot Marketing Hub", category: "Marketing Automation", rating: 65, reviews: 24997, platforms: 4, avg: 86, reliable: 7, recent: 97, result: 70 },
  { slug: "smartsheet", name: "Smartsheet", category: "Project Management", rating: 65, reviews: 29185, platforms: 4, avg: 88, reliable: 6, recent: 80, result: 87 },
  { slug: "braze", name: "Braze", category: "Marketing Automation", rating: 64, reviews: 2322, platforms: 4, avg: 90, reliable: 34, recent: 79, result: 55 },
  { slug: "disruptive-advertising", name: "Disruptive Advertising", category: "Digital Marketing", rating: 64, reviews: 667, platforms: 3, avg: 95, reliable: 42, recent: 69, result: 48 },
  { slug: "asana", name: "Asana", category: "Project Management", rating: 62, reviews: 30237, platforms: 4, avg: 88, reliable: 7, recent: 87, result: 67 },
  { slug: "jira", name: "Jira", category: "Project Management", rating: 60, reviews: 31446, platforms: 4, avg: 87, reliable: 6, recent: 93, result: 54 },
  { slug: "adobe-marketo-engage", name: "Adobe Marketo Engage", category: "Marketing Automation", rating: 57, reviews: 4973, platforms: 4, avg: 83, reliable: 34, recent: 75, result: 38 },
  { slug: "webfx", name: "WebFX", category: "Digital Marketing", rating: null, reviews: 468, platforms: 2, avg: null, reliable: null, recent: null, result: null },
];

const GAPS = [
  { name: "Smartsheet", gap: 3.2, between: "Trustpilot 1.3 vs Capterra 4.5" },
  { name: "Jira", gap: 3.2, between: "Trustpilot 1.2 vs Capterra 4.4" },
  { name: "Klaviyo", gap: 3.0, between: "Trustpilot 1.7 vs Gartner Peer Insights 4.7" },
  { name: "HubSpot Marketing Hub", gap: 3.0, between: "Trustpilot 1.5 vs Capterra 4.5" },
];

const LIVE_CATEGORIES = ["Marketing Automation", "Project Management", "Digital Marketing"];

const PLANNED_CATEGORIES = [
  "HR Technology", "Telecommunications", "Agriculture", "Accounting",
  "Artificial Intelligence", "Automotive", "Biotech", "Cleantech",
  "Cloud Computing", "Construction", "Cybersecurity", "Developer Tools",
  "E-commerce", "Energy", "Financial Services", "Fintech", "Healthcare",
  "Information Services", "Legal Technology", "Logistics", "Manufacturing",
  "Pharmaceuticals", "Procurement", "Professional Training", "Public Relations",
  "Real Estate Technology", "Retail", "Robotics", "SaaS", "Sales Enablement",
  "Staffing",
];

const STATS = [
  { value: "23", label: "companies rated" },
  { value: "1,398", label: "reviews from the last year" },
  { value: "2,338", label: "reviews read one by one" },
  { value: "282,974", label: "reviews behind the averages" },
];

const MEASURES = [
  {
    name: "Review Avg",
    body: "Every review counted once, so a platform carrying more reviews carries more of the average.",
  },
  {
    name: "Reliable",
    body: "Whether the platforms tell the same story. A wide gap, or being found on only one platform, brings this down.",
  },
  {
    name: "Recent",
    body: "Strong for a review in the last 30 days, falling away with every day since the newest one.",
  },
  {
    name: "Result-Specific",
    body: "How often reviewers name an outcome a stranger could check.",
  },
];

const num = (v: number) => v.toLocaleString("en-US");

/* ---------- Hero ---------- */

const HeroSection = () => (
  <RSection size="lg" bg="white" sectionName="hero">
    <RContainer className="max-w-3xl">
      <WireHeading level={1} copyId="reviewinsight.home.hero.title" className="mb-5">
        One rating per company, across every review platform.
      </WireHeading>
      <WireText copyId="reviewinsight.home.hero.lede" className="mb-4 text-lg text-gray-600">
        Review platforms disagree about the same B2B company, sometimes by more than two
        stars. ReviewInsight reads them together and publishes a single rating that shows its
        own arithmetic.
      </WireText>
      <WireText copyId="reviewinsight.home.hero.note" className="mb-8 text-sm text-gray-500">
        No company can pay to be listed here or to change its rating.
      </WireText>

      <div className="flex max-w-xl flex-col gap-2 sm:flex-row">
        <input
          type="text"
          placeholder="Search a vendor or company"
          className="flex-1 border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400"
        />
        <button className="border-2 border-gray-900 bg-gray-900 px-6 py-3 text-sm font-semibold text-white">
          Search
        </button>
      </div>

      <WireText copyId="reviewinsight.home.hero.coverage" className="mt-4 text-sm text-gray-500">
        24 vendors across Marketing Automation, Project Management and Digital Marketing.
      </WireText>
    </RContainer>
  </RSection>
);

/* ---------- Stats ---------- */

const StatsSection = () => (
  <RSection size="sm" bg="light" sectionName="stats">
    <RContainer>
      <div className="grid grid-cols-2 gap-px border border-gray-200 bg-gray-200 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-white p-6">
            <p className="text-3xl font-bold text-gray-900">{s.value}</p>
            <p className="mt-1 text-sm text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>
    </RContainer>
  </RSection>
);

/* ---------- Ranking ---------- */

const RankRow = ({ v, i }: { v: Vendor; i: number }) => (
  <div className="flex flex-col gap-4 border-b border-gray-200 py-6 sm:flex-row sm:items-center sm:gap-6">
    <span className="text-sm font-semibold text-gray-400">{i + 1}</span>
    <div className="flex size-14 shrink-0 flex-col items-center justify-center border-2 border-gray-900">
      <span className="text-lg font-bold text-gray-900">{v.rating ?? "NR"}</span>
    </div>
    <div className="flex-1">
      <p className="font-semibold text-gray-900">{v.name}</p>
      <p className="text-sm text-gray-500">
        {v.category} &middot; {num(v.reviews)} reviews across {v.platforms} sites
      </p>
    </div>
    <div className="flex flex-wrap gap-2">
      <span className="border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-600">
        Review Avg {v.avg ?? "n/a"}
      </span>
      <span className="border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-600">
        Reliable {v.reliable ?? "n/a"}
      </span>
      <span className="border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-600">
        Recent {v.recent ?? "n/a"}
      </span>
      <span className="border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-600">
        Result {v.result ?? "n/a"}
      </span>
    </div>
  </div>
);

const RankingSection = () => {
  const [tab, setTab] = useState("All vendors");
  const shown = (
    tab === "All vendors" ? VENDORS : VENDORS.filter((v) => v.category === tab)
  ).slice(0, 8);

  return (
    <RSection bg="white" sectionName="ranking">
      <RContainer className="max-w-4xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Rankings
        </p>
        <WireHeading level={2} copyId="reviewinsight.home.ranking.title" className="mb-4">
          Highest rated
        </WireHeading>
        <WireText copyId="reviewinsight.home.ranking.lede" className="mb-8 max-w-2xl text-gray-600">
          Companies are ranked by their ReviewInsight Rating. A rating measures the review
          evidence behind a company, so it compares like with like inside a category. Across
          categories it tells you whose reviews are stronger, not whose product is better.
        </WireText>

        <div className="mb-6 flex flex-wrap gap-2">
          {["All vendors", ...LIVE_CATEGORIES].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={
                t === tab
                  ? "border-2 border-gray-900 bg-gray-900 px-4 py-2 text-sm font-semibold text-white"
                  : "border-2 border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600"
              }
            >
              {t}
            </button>
          ))}
        </div>

        <div className="border border-gray-200 bg-white px-6">
          {shown.map((v, i) => (
            <RankRow key={v.slug} v={v} i={i} />
          ))}
        </div>

        <p className="mt-4 text-sm font-semibold text-gray-900">All 24 vendors &rarr;</p>
      </RContainer>
    </RSection>
  );
};

/* ---------- What the rating measures ---------- */

const MeasuresSection = () => (
  <RSection bg="light" sectionName="measures">
    <RContainer className="max-w-4xl">
      <WireHeading level={2} copyId="reviewinsight.home.measures.title" className="mb-4">
        What the rating measures
      </WireHeading>
      <WireText copyId="reviewinsight.home.measures.lede" className="mb-8 max-w-2xl text-gray-600">
        A rating is the average of these four. Each one is published, and every number on a
        company page can be rebuilt by hand.
      </WireText>
      <div className="grid gap-px bg-gray-200 md:grid-cols-2">
        {MEASURES.map((m, i) => (
          <div key={m.name} className="bg-white p-6">
            <p className="mb-2 font-semibold text-gray-900">{m.name}</p>
            <WireText
              copyId={`reviewinsight.home.measure.${i + 1}`}
              className="text-sm text-gray-600"
            >
              {m.body}
            </WireText>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm font-semibold text-gray-900">Full method &rarr;</p>
    </RContainer>
  </RSection>
);

/* ---------- Where the sites disagree ---------- */

const DisagreeSection = () => (
  <RSection bg="white" sectionName="disagree">
    <RContainer className="max-w-4xl">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
        Finding
      </p>
      <WireHeading level={2} copyId="reviewinsight.home.disagree.title" className="mb-4">
        Where the sites disagree
      </WireHeading>
      <WireText copyId="reviewinsight.home.disagree.lede" className="mb-8 max-w-2xl text-gray-600">
        The gap between a vendor&rsquo;s highest and lowest rated site, in stars. Every vendor
        has one. A wide gap means no single rating tells the story.
      </WireText>
      <div className="overflow-x-auto border border-gray-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="px-5 py-3 font-semibold text-gray-900">Vendor</th>
              <th className="px-5 py-3 font-semibold text-gray-900">Rating gap</th>
              <th className="px-5 py-3 font-semibold text-gray-900">Between</th>
            </tr>
          </thead>
          <tbody>
            {GAPS.map((g) => (
              <tr key={g.name} className="border-b border-gray-200">
                <td className="px-5 py-3 font-semibold text-gray-900">{g.name}</td>
                <td className="px-5 py-3 font-bold text-gray-900">{g.gap}</td>
                <td className="px-5 py-3 text-gray-500">{g.between}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </RContainer>
  </RSection>
);

/* ---------- Industries ---------- */

const IndustriesSection = () => (
  <RSection bg="light" sectionName="industries">
    <RContainer className="max-w-4xl">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
        Coverage
      </p>
      <WireHeading level={2} copyId="reviewinsight.home.industries.title" className="mb-4">
        Industries
      </WireHeading>
      <WireText copyId="reviewinsight.home.industries.lede" className="mb-8 max-w-2xl text-gray-600">
        The index is being built out across the industry list the network already publishes.
        Two categories carry rated companies today. The rest are named so you can see the
        shape of the index, though nothing sits behind them yet.
      </WireText>

      <p className="mb-3 text-sm font-semibold text-gray-900">Live now.</p>
      <div className="mb-8 flex flex-wrap gap-2">
        {LIVE_CATEGORIES.map((c) => (
          <span
            key={c}
            className="border border-gray-900 bg-white px-3 py-1.5 text-sm font-semibold text-gray-900"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {PLANNED_CATEGORIES.map((c) => (
          <span
            key={c}
            className="border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-400"
          >
            {c}
          </span>
        ))}
      </div>

      <WireText copyId="reviewinsight.home.industries.note" className="mt-6 text-sm text-gray-500">
        32 industries. Nothing is published for an industry until every company in it has been
        read across the platforms that carry it.
      </WireText>
    </RContainer>
  </RSection>
);

/* ---------- Everyone we read ---------- */

const EveryoneSection = () => (
  <RSection bg="white" sectionName="everyone">
    <RContainer className="max-w-4xl">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
        Vendors
      </p>
      <WireHeading level={2} copyId="reviewinsight.home.everyone.title" className="mb-8">
        Everyone we read
      </WireHeading>
      <div className="flex flex-wrap gap-2">
        {[...VENDORS]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((v) => (
            <span
              key={v.slug}
              className="border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700"
            >
              {v.name}
            </span>
          ))}
      </div>
    </RContainer>
  </RSection>
);

/* ---------- Page ---------- */

export default function ReviewInsightHomeV2() {
  return (
    <>
      <WireNavbar
        logoSpec={{ kind: "wordmark", text: "ReviewInsight" }}
        links={["Categories", "Vendors", "Methodology", "Quarterly index"]}
        cta={false}
      />
      <HeroSection />
      <StatsSection />
      <RankingSection />
      <MeasuresSection />
      <DisagreeSection />
      <IndustriesSection />
      <EveryoneSection />
      <WireDivider />
      <WireFooter />
    </>
  );
}
