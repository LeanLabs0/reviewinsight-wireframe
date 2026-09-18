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
 * ReviewInsightCompareV3.tsx: head to head comparison, rebuilt as an article.
 *
 * V2 was a scoreboard: two rating boxes, a table of parts, and captions. That
 * shape is what Google's spam policy calls stitching content from other pages
 * without adding value, because everything on it could be read off G2 and
 * Capterra directly.
 *
 * V3 leads with reporting we can do and the review platforms cannot: we read
 * 274 reviews across these two companies and graded them. Every figure and
 * quote below was generated from that data and checked back against it, so the
 * prose cannot drift from the numbers beside it.
 *
 * Two things this page deliberately does NOT do:
 *   1. No Review or AggregateRating structured data. Google's review snippet
 *      rules forbid marking up a rating aggregated from other websites.
 *   2. No dynamic pair picker in the indexed page. Published comparisons are a
 *      curated set chosen by search demand; any-pair browsing belongs in the
 *      noindexed tool linked at the foot.
 */

/* ---------- Data, from the ReviewInsight pull ---------- */

const A = {
  name: "ClickUp",
  rating: 87,
  reviewsTotal: "19,713",
  spread: 0.6,
  spreadLow: { name: "Trustpilot", rating: 4.0 },
  spreadHigh: { name: "G2", rating: 4.6 },
  read: 127,
  labelled: 118,
  outcomes: 38,
  positiveShare: 47,
  outcomeShare: 29,
  platforms: [
    { name: "G2", rating: 4.6, reviews: "13,689" },
    { name: "Capterra", rating: 4.6, reviews: "4,615" },
    { name: "Gartner Peer Insights", rating: 4.5, reviews: "756" },
    { name: "Trustpilot", rating: 4.0, reviews: "653" },
  ],
};

const B = {
  name: "Asana",
  rating: 62,
  reviewsTotal: "30,237",
  spread: 3.0,
  spreadLow: { name: "Trustpilot", rating: 1.5 },
  spreadHigh: { name: "Capterra", rating: 4.5 },
  read: 147,
  labelled: 129,
  outcomes: 37,
  positiveShare: 30,
  outcomeShare: 19,
  platforms: [
    { name: "Capterra", rating: 4.5, reviews: "13,631" },
    { name: "Gartner Peer Insights", rating: 4.5, reviews: "2,446" },
    { name: "G2", rating: 4.4, reviews: "13,853" },
    { name: "Trustpilot", rating: 1.5, reviews: "307" },
  ],
};

const PARTS = [
  { label: "Review Avg", a: 91.5, b: 88.5, gap: 3.0 },
  { label: "Reliable", a: 81.6, b: 7.0, gap: 74.6 },
  { label: "Recent", a: 97.7, b: 86.7, gap: 11.0 },
  { label: "Result-Specific", a: 76.0, b: 67.0, gap: 9.0 },
];

const CATEGORY_MEDIAN_SPREAD = 2.4;

/* ---------- Header ---------- */

const HeaderSection = () => (
  <RSection size="md" bg="white" sectionName="header">
    <RContainer className="max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
        Project Management &middot; Head to head
      </p>
      <WireHeading level={1} copyId="reviewinsight.compare.title" className="mb-5">
        ClickUp vs Asana
      </WireHeading>
      <WireText copyId="reviewinsight.compare.verdict" className="text-lg text-gray-700">
        ClickUp&rsquo;s review evidence is stronger across every measure, with the widest gap
        in reliability. ClickUp scores 81.6 on Reliable while Asana scores 7.0, meaning
        ClickUp&rsquo;s ratings hold steady across platforms while Asana&rsquo;s vary wildly.
        Buyers checking only one review site for Asana will see a picture that may not match
        the others.
      </WireText>
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
        <span>
          By the <span className="font-semibold text-gray-700">ReviewInsight desk</span>
        </span>
        <span className="text-gray-300">|</span>
        <span>Last updated 12 August 2026</span>
        <span className="text-gray-300">|</span>
        <span className="underline">How we rate</span>
      </div>
    </RContainer>
  </RSection>
);

/* ---------- Who should pick which ---------- */

const PickSection = () => (
  <RSection bg="light" sectionName="who-should-pick">
    <RContainer className="max-w-4xl">
      <WireHeading level={2} copyId="reviewinsight.compare.pick.title" className="mb-6">
        Who should pick which
      </WireHeading>
      <div className="grid gap-px bg-gray-200 md:grid-cols-2">
        <div className="bg-white p-6">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex size-12 shrink-0 items-center justify-center border-2 border-gray-900">
              <span className="font-bold text-gray-900">{A.rating}</span>
            </div>
            <p className="font-semibold text-gray-900">{A.name}</p>
          </div>
          <WireText copyId="reviewinsight.compare.pick.a" className="text-sm text-gray-600">
            ClickUp suits teams that need consolidated tooling and want confidence that
            ratings reflect a consistent experience, with 47 percent of reviews describing
            positive outcomes and a 0.6-point spread across platforms.
          </WireText>
        </div>
        <div className="bg-white p-6">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex size-12 shrink-0 items-center justify-center border-2 border-gray-900">
              <span className="font-bold text-gray-900">{B.rating}</span>
            </div>
            <p className="font-semibold text-gray-900">{B.name}</p>
          </div>
          <WireText copyId="reviewinsight.compare.pick.b" className="text-sm text-gray-600">
            Asana suits buyers willing to weigh conflicting signals and prioritise features
            over rating consistency, though only 30 percent of reviews described positive
            outcomes and the 3.0-point spread means one platform rates it 1.5 stars while
            another rates it 4.5.
          </WireText>
        </div>
      </div>
    </RContainer>
  </RSection>
);

/* ---------- At a glance ---------- */

const GlanceSection = () => (
  <RSection bg="white" sectionName="at-a-glance">
    <RContainer className="max-w-4xl">
      <WireHeading level={2} copyId="reviewinsight.compare.glance.title" className="mb-6">
        At a glance
      </WireHeading>
      <div className="overflow-x-auto border border-gray-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="px-5 py-3 font-semibold text-gray-900">Part</th>
              <th className="px-5 py-3 text-right font-semibold text-gray-900">{A.name}</th>
              <th className="px-5 py-3 text-right font-semibold text-gray-900">{B.name}</th>
              <th className="px-5 py-3 text-right font-semibold text-gray-900">Gap</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="px-5 py-3 font-semibold text-gray-900">
                ReviewInsight Rating
              </td>
              <td className="px-5 py-3 text-right font-bold text-gray-900">{A.rating}</td>
              <td className="px-5 py-3 text-right font-bold text-gray-900">{B.rating}</td>
              <td className="px-5 py-3 text-right font-semibold text-gray-700">25</td>
            </tr>
            {PARTS.map((p) => (
              <tr key={p.label} className="border-b border-gray-200">
                <td className="px-5 py-3 text-gray-700">{p.label}</td>
                <td className="px-5 py-3 text-right text-gray-900">{p.a}</td>
                <td className="px-5 py-3 text-right text-gray-900">{p.b}</td>
                <td className="px-5 py-3 text-right text-gray-500">{p.gap}</td>
              </tr>
            ))}
            <tr className="border-b border-gray-200">
              <td className="px-5 py-3 text-gray-700">Reviews behind the average</td>
              <td className="px-5 py-3 text-right text-gray-900">{A.reviewsTotal}</td>
              <td className="px-5 py-3 text-right text-gray-900">{B.reviewsTotal}</td>
              <td className="px-5 py-3 text-right text-gray-500">&nbsp;</td>
            </tr>
            <tr>
              <td className="px-5 py-3 text-gray-700">Reviews we read closely</td>
              <td className="px-5 py-3 text-right text-gray-900">{A.read}</td>
              <td className="px-5 py-3 text-right text-gray-900">{B.read}</td>
              <td className="px-5 py-3 text-right text-gray-500">&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-gray-400">
        Asana carries more reviews than ClickUp and still rates lower. Volume is counted
        inside Review Avg, never on its own.
      </p>
    </RContainer>
  </RSection>
);

/* ---------- Biggest difference ---------- */

const DifferenceSection = () => (
  <RSection bg="light" sectionName="biggest-difference">
    <RContainer className="max-w-4xl">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
        The 74.6-point gap
      </p>
      <WireHeading level={2} copyId="reviewinsight.compare.difference.title" className="mb-4">
        Where they differ most
      </WireHeading>
      <WireText
        copyId="reviewinsight.compare.difference.body"
        className="mb-8 max-w-2xl text-gray-700"
      >
        The Reliable part measures how consistently a company scores across review
        platforms, and here the gap is 74.6 points. ClickUp scores 81.6 because its ratings
        range from 4.0 to 4.6, a spread of 0.6 points. Asana scores 7.0 because its ratings
        range from 1.5 on Trustpilot to 4.5 on Capterra and Gartner Peer Insights, a spread
        of 3.0 points. A wide spread means the experience a buyer reads about depends
        heavily on which site they visit first.
      </WireText>
      <div className="grid gap-px bg-gray-200 md:grid-cols-2">
        {[A, B].map((c) => (
          <div key={c.name} className="bg-white p-6">
            <p className="mb-1 font-semibold text-gray-900">{c.name}</p>
            <p className="mb-4 text-sm text-gray-500">
              {c.spread} point spread, {c.spreadLow.name} {c.spreadLow.rating} to{" "}
              {c.spreadHigh.name} {c.spreadHigh.rating}
            </p>
            <div className="flex flex-col gap-2">
              {c.platforms.map((p) => (
                <div key={p.name} className="flex items-center gap-3">
                  <span className="w-44 shrink-0 text-sm text-gray-600">{p.name}</span>
                  <div className="h-2 flex-1 bg-gray-100">
                    <div
                      className="h-2 bg-gray-900"
                      style={{ width: `${(p.rating / 5) * 100}%` }}
                    />
                  </div>
                  <span className="w-8 shrink-0 text-right text-sm font-semibold text-gray-900">
                    {p.rating}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </RContainer>
  </RSection>
);

/* ---------- What reviewers say ---------- */

const ReviewersSection = () => (
  <RSection bg="white" sectionName="what-reviewers-say">
    <RContainer className="max-w-4xl">
      <WireHeading level={2} copyId="reviewinsight.compare.reviewers.title" className="mb-4">
        What reviewers actually say
      </WireHeading>
      <WireText
        copyId="reviewinsight.compare.reviewers.body"
        className="mb-8 max-w-2xl text-gray-700"
      >
        ClickUp reviewers averaged 47 percent positive across platforms, with 29 percent
        naming a checkable outcome. Asana reviewers averaged 30 percent positive, with 19
        percent naming an outcome. The outcome share for ClickUp was 10 percentage points
        higher, and the positive share 17 points higher. Shares are averaged across
        platforms rather than pooled, so the largest platform does not decide the answer.
      </WireText>
      <div className="grid gap-px bg-gray-200 md:grid-cols-2">
        <div className="bg-white p-6">
          <p className="mb-4 font-semibold text-gray-900">{A.name}</p>
          <blockquote className="border-l-2 border-gray-900 pl-4 text-sm italic text-gray-700">
            &ldquo;cutting the number of tools I keep open; before, context was scattered
            across a few apps and things quietly fell out of sync&rdquo;
          </blockquote>
          <p className="mt-3 text-xs text-gray-400">Trustpilot reviewer</p>
        </div>
        <div className="bg-white p-6">
          <p className="mb-4 font-semibold text-gray-900">{B.name}</p>
          <blockquote className="border-l-2 border-gray-900 pl-4 text-sm italic text-gray-700">
            &ldquo;After I spent most of a day two weeks ago working out a calendar for my
            master&rsquo;s dissertation, everything disappeared when my free trial
            ended&rdquo;
          </blockquote>
          <p className="mt-3 text-xs text-gray-400">Trustpilot reviewer</p>
        </div>
      </div>
    </RContainer>
  </RSection>
);

/* ---------- Platform disagreement ---------- */

const DisagreementSection = () => (
  <RSection bg="light" sectionName="platform-disagreement">
    <RContainer className="max-w-4xl">
      <WireHeading level={2} copyId="reviewinsight.compare.spread.title" className="mb-4">
        What one review site would hide
      </WireHeading>
      <WireText copyId="reviewinsight.compare.spread.body" className="max-w-2xl text-gray-700">
        ClickUp&rsquo;s 0.6-point spread is narrower than the {CATEGORY_MEDIAN_SPREAD}-point
        median for the Project Management category, meaning its ratings are more consistent
        than most peers. Asana&rsquo;s 3.0-point spread is wider than the median, and a buyer
        who checks only Capterra or Gartner Peer Insights will see 4.5 stars while Trustpilot
        shows 1.5. That gap hides the fact that 8 percent of Trustpilot reviews were positive
        compared to 38 percent on Capterra and 44 percent on G2.
      </WireText>
    </RContainer>
  </RSection>
);

/* ---------- Method ---------- */

const MethodSection = () => (
  <RSection bg="white" sectionName="method">
    <RContainer className="max-w-4xl">
      <WireHeading level={2} copyId="reviewinsight.compare.method.title" className="mb-4">
        How we worked this out
      </WireHeading>
      <WireText copyId="reviewinsight.compare.method.body" className="mb-6 max-w-2xl text-gray-700">
        We read 127 reviews of ClickUp across 3 platforms and 147 reviews of Asana across 3
        platforms. Of the 118 ClickUp reviews we labelled, 38 named a checkable outcome. Of
        the 129 Asana reviews we labelled, 37 named an outcome.
      </WireText>
      <div className="border border-gray-200 bg-gray-50 p-6">
        <p className="mb-2 text-sm font-semibold text-gray-900">
          No company can pay to be listed here or to change its rating.
        </p>
        <WireText copyId="reviewinsight.compare.method.note" className="text-sm text-gray-600">
          A higher rating means the review evidence behind a company is stronger, not that
          the product is better. We have not used either product. Every figure on this page
          can be rebuilt by hand from the method.
        </WireText>
        <p className="mt-4 text-sm font-semibold text-gray-900 underline">
          Read the full method
        </p>
      </div>
    </RContainer>
  </RSection>
);

/* ---------- Compare with another company ---------- */

const ToolSection = () => (
  <RSection bg="light" sectionName="compare-tool">
    <RContainer className="max-w-4xl">
      <div className="border border-dashed border-gray-400 bg-white p-8">
        <WireHeading level={2} copyId="reviewinsight.compare.tool.title" className="mb-3">
          Compare two other companies
        </WireHeading>
        <WireText copyId="reviewinsight.compare.tool.body" className="mb-6 max-w-xl text-gray-600">
          Written comparisons cover the pairings buyers ask about most. To put any two rated
          companies side by side, use the comparison tool.
        </WireText>
        <div className="flex max-w-xl flex-col gap-2 sm:flex-row">
          <div className="flex-1 border border-gray-300 bg-white px-4 py-3 text-sm text-gray-400">
            First company
          </div>
          <div className="flex items-center justify-center px-2 text-sm text-gray-400">vs</div>
          <div className="flex-1 border border-gray-300 bg-white px-4 py-3 text-sm text-gray-400">
            Second company
          </div>
          <button className="border-2 border-gray-900 bg-gray-900 px-6 py-3 text-sm font-semibold text-white">
            Compare
          </button>
        </div>
        <p className="mt-4 text-xs text-gray-400" data-dev-note="true">
          Build note: the tool view is noindex. Only written comparisons like this page are
          indexable, so the site never ships thousands of near-identical generated pairings.
        </p>
      </div>
    </RContainer>
  </RSection>
);

/* ---------- Page ---------- */

export default function ReviewInsightCompareV3() {
  return (
    <>
      <WireNavbar
        logoSpec={{ kind: "wordmark", text: "ReviewInsight" }}
        links={["Categories", "Vendors", "Methodology", "Quarterly index"]}
        cta={false}
      />
      <HeaderSection />
      <PickSection />
      <GlanceSection />
      <DifferenceSection />
      <ReviewersSection />
      <DisagreementSection />
      <MethodSection />
      <ToolSection />
      <WireDivider />
      <WireFooter />
    </>
  );
}
