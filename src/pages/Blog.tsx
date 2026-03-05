import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBookingButton } from "@/components/StickyBookingButton";
import { Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
const blogPosts = [
  {
    id: 1,
    title: "How to Whiten Teeth at Home: Safe & Effective Methods",
    slug: "how-to-whiten-teeth-at-home",
    excerpt: "Discover proven teeth whitening methods you can try at home, from natural remedies to professional-grade products recommended by dentists. Learn what works and what to avoid for a brighter smile.",
    content: `Teeth whitening is one of the most popular cosmetic dental treatments. Many patients ask us about safe ways to whiten teeth at home. Here's what our dental experts recommend:

**1. Whitening Toothpaste**
Use an ADA-approved whitening toothpaste that contains mild abrasives and peroxide to remove surface stains gently.

**2. Baking Soda**
A natural whitening agent, baking soda can be used occasionally to polish teeth. Mix with water to form a paste and brush gently.

**3. Professional Take-Home Kits**
The most effective option - custom trays from your dentist with professional-grade whitening gel provide consistent, safe results.

**What to Avoid:**
- Charcoal-based products (too abrasive)
- Lemon juice (erodes enamel)
- Excessive use of any whitening product

For best results, consult with Dr. Priyanka Kaushal at Sambhav Dental Clinic for a personalized whitening plan.`,
    category: "Teeth Whitening",
    readTime: "5 min read",
    date: "Jan 8, 2025",
  },
  {
    id: 2,
    title: "Is Root Canal Painful? The Truth About Modern Root Canal Treatment",
    slug: "is-root-canal-painful",
    excerpt: "Learn the truth about root canal treatment, modern pain management techniques, and why this procedure is actually pain-relieving rather than pain-causing.",
    content: `One of the most common fears patients have is about root canal treatment. Let's debunk the myths:

**The Reality:**
Modern root canal treatment is virtually painless! With today's advanced anesthesia and techniques, most patients report the procedure feels similar to getting a filling.

**Why Root Canals Are Necessary:**
- Save severely infected teeth
- Prevent spread of infection
- Eliminate tooth pain caused by infection

**What to Expect:**
1. Local anesthesia numbs the area completely
2. The infected pulp is removed
3. The tooth is cleaned and sealed
4. A crown protects the restored tooth

**Pain After Treatment:**
Some mild discomfort for 2-3 days is normal and easily managed with over-the-counter pain medication.

At Sambhav Dental Clinic, Dr. Priyanka Kaushal uses the latest techniques for comfortable, painless root canal treatment.`,
    category: "Root Canal",
    readTime: "4 min read",
    date: "Jan 5, 2025",
  },
  {
    id: 3,
    title: "Best Toothpaste for Sensitive Teeth: Expert Recommendations",
    slug: "best-toothpaste-for-sensitive-teeth",
    excerpt: "Our dental experts share their top picks for toothpaste that effectively treats tooth sensitivity and protects your enamel from further damage.",
    content: `Tooth sensitivity affects millions of people. Here's how to choose the right toothpaste:

**What Causes Sensitivity?**
- Worn enamel
- Exposed tooth roots
- Cavities or cracks
- Gum recession

**Key Ingredients to Look For:**
1. **Potassium Nitrate** - Calms nerve endings
2. **Stannous Fluoride** - Blocks exposed tubules
3. **Arginine** - Seals sensitive areas

**Our Top Recommendations:**
- Sensodyne Rapid Relief
- Colgate Sensitive Pro-Relief
- Parodontax for gum-related sensitivity

**Tips for Use:**
- Use consistently for 2-4 weeks
- Don't rinse immediately after brushing
- Use a soft-bristled toothbrush

If sensitivity persists, visit Sambhav Dental Clinic for a proper evaluation.`,
    category: "Dental Care",
    readTime: "6 min read",
    date: "Jan 2, 2025",
  },
  {
    id: 4,
    title: "How Much Do Dental Implants Cost in India? Complete Guide 2025",
    slug: "dental-implants-cost-guide",
    excerpt: "Understand the factors affecting dental implant pricing in India, financing options, and why implants are a worthwhile investment for your smile.",
    content: `Dental implants are the gold standard for tooth replacement. Here's what affects the cost:

**Factors Affecting Cost:**
1. **Implant Brand** - Premium brands cost more but offer better warranties
2. **Number of Implants** - Single vs. multiple teeth
3. **Additional Procedures** - Bone grafting, sinus lift
4. **Crown Type** - Metal, ceramic, or zirconia

**Average Costs in Pune:**
- Single Implant: ₹25,000 - ₹60,000
- Implant + Crown: ₹40,000 - ₹90,000
- Full Mouth (All-on-4): ₹2,50,000 - ₹5,00,000

**Why Implants Are Worth It:**
- Last 25+ years with proper care
- Look and feel like natural teeth
- Prevent bone loss
- No damage to adjacent teeth

Consult Dr. Priyanka Kaushal at Sambhav Dental Clinic for a personalized treatment plan and transparent pricing.`,
    category: "Dental Implants",
    readTime: "7 min read",
    date: "Dec 28, 2024",
  },
  {
    id: 5,
    title: "Braces vs Invisalign: Which Orthodontic Treatment is Right for You?",
    slug: "braces-vs-invisalign",
    excerpt: "Compare traditional braces and Invisalign clear aligners to find the best orthodontic treatment for your lifestyle, budget, and dental needs.",
    content: `Choosing between braces and Invisalign? Here's a detailed comparison:

**Traditional Braces:**
✓ Best for complex cases
✓ Lower cost
✓ No compliance issues
✗ Visible metal
✗ Food restrictions
✗ Harder to clean

**Invisalign Clear Aligners:**
✓ Nearly invisible
✓ Removable for eating
✓ Easier oral hygiene
✗ Higher cost
✗ Requires discipline (22 hrs/day)
✗ Not ideal for severe cases

**Treatment Duration:**
- Braces: 18-36 months
- Invisalign: 12-18 months (mild-moderate cases)

**Cost Comparison:**
- Braces: ₹30,000 - ₹80,000
- Invisalign: ₹1,50,000 - ₹3,50,000

**Best Choice For You:**
Visit Sambhav Dental Clinic for a free orthodontic consultation to determine which treatment suits your needs.`,
    category: "Orthodontics",
    readTime: "5 min read",
    date: "Dec 24, 2024",
  },
  {
    id: 6,
    title: "How Often Should You Visit the Dentist? Expert Guidelines",
    slug: "how-often-visit-dentist",
    excerpt: "Find out the recommended frequency for dental checkups and why regular visits are crucial for maintaining long-term oral health.",
    content: `Regular dental visits are crucial for maintaining oral health. Here's what experts recommend:

**General Guideline:**
Most adults should visit the dentist every 6 months for checkups and professional cleaning.

**You May Need More Frequent Visits If:**
- Gum disease history
- Prone to cavities
- Diabetes or immune conditions
- Pregnant
- Smoker

**What Happens During a Checkup:**
1. Professional cleaning
2. Cavity detection
3. Gum health assessment
4. Oral cancer screening
5. X-rays (annually)

**Benefits of Regular Visits:**
- Early problem detection saves money
- Prevent tooth loss
- Maintain fresh breath
- Catch oral cancer early

**Children's Dental Visits:**
Start by age 1, then every 6 months. Early visits prevent dental anxiety.

Schedule your next checkup at Sambhav Dental Clinic, Hinjewadi, Pune.`,
    category: "Dental Care",
    readTime: "4 min read",
    date: "Dec 20, 2024",
  },
  {
    id: 7,
    title: "What Causes Bad Breath and How to Fix It Permanently",
    slug: "causes-of-bad-breath",
    excerpt: "Discover the common causes of halitosis (bad breath) and proven solutions to eliminate it for good. Expert tips from our dental team.",
    content: `Bad breath (halitosis) affects 1 in 4 people. Here's how to tackle it:

**Common Causes:**
1. Poor oral hygiene (most common)
2. Gum disease
3. Dry mouth
4. Food particles
5. Medical conditions

**Solutions That Work:**
- Brush twice daily + floss
- Clean your tongue (use a scraper)
- Stay hydrated
- Avoid tobacco
- Regular dental cleanings

**When to See a Dentist:**
If bad breath persists despite good hygiene, it may indicate:
- Gum disease
- Tooth decay
- Oral infections

**Quick Freshening Tips:**
- Chew sugar-free gum
- Rinse with water after meals
- Eat crunchy fruits/vegetables

Visit Sambhav Dental Clinic for a comprehensive oral health evaluation.`,
    category: "Dental Care",
    readTime: "5 min read",
    date: "Dec 15, 2024",
  },
  {
    id: 8,
    title: "Wisdom Teeth Removal: When Is It Necessary?",
    slug: "wisdom-teeth-removal",
    excerpt: "Learn when wisdom teeth extraction is recommended, what to expect during the procedure, and recovery tips from dental experts.",
    content: `Not everyone needs wisdom teeth removed. Here's when extraction is necessary:

**Signs You Need Removal:**
- Pain or swelling
- Repeated infections
- Damage to adjacent teeth
- Cysts or tumors
- Impaction (stuck in gum/bone)

**When Removal May Not Be Needed:**
- Fully erupted and healthy
- Properly aligned
- Easy to clean

**The Extraction Process:**
1. X-rays and evaluation
2. Local or general anesthesia
3. Extraction (15-30 min per tooth)
4. Stitches if needed

**Recovery Tips:**
- Ice packs for swelling
- Soft foods for 3-5 days
- No smoking or straws
- Gentle salt water rinses

Most patients recover fully within 1-2 weeks. Dr. Priyanka Kaushal at Sambhav Dental Clinic performs safe, comfortable wisdom tooth extractions.`,
    category: "Oral Surgery",
    readTime: "6 min read",
    date: "Dec 10, 2024",
  },
];

const categories = ["All", "Dental Care", "Root Canal", "Teeth Whitening", "Dental Implants", "Orthodontics", "Oral Surgery"];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesCategory;
  });

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: blogPosts.slice(0, 5).map((post) => ({
      "@type": "Question",
      name: post.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: post.excerpt,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Dental Health Blog | Tips & Guides by Sambhav Dental Clinic"
        description="Expert dental health tips, guides, and articles by Dr. Priyanka Kaushal. Learn about teeth whitening, root canal, dental implants, braces, and oral care at Sambhav Dental Clinic, Hinjewadi."
        keywords="dental blog, teeth whitening tips, root canal guide, dental implants cost, braces vs invisalign, dental care tips, oral health advice, dentist advice pune"
        canonical="/blog"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-dental-teal-light via-background to-dental-mint">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
                Dental Health Blog
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Expert Dental Tips & Guides
              </h1>
              <p className="text-lg text-muted-foreground">
                Stay informed with our latest articles on dental care, treatments, 
                and tips for maintaining a healthy, beautiful smile.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No articles found matching your search.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-card rounded-2xl p-6 md:p-8 shadow-card"
                  >
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-block text-xs font-semibold text-primary bg-dental-teal-light px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>

                    {expandedPost === post.id && (
                      <div className="prose prose-sm max-w-none mt-6 pt-6 border-t border-border">
                        <div className="whitespace-pre-line text-foreground/90">
                          {post.content}
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                      className="flex items-center text-primary font-medium text-sm hover:gap-2 transition-all mt-4"
                    >
                      <span>{expandedPost === post.id ? "Show Less" : "Read Full Article"}</span>
                      <ArrowRight className={`w-4 h-4 ml-1 transition-transform ${expandedPost === post.id ? "rotate-90" : ""}`} />
                    </button>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
        </main>
        <Footer />
        <StickyBookingButton />
      </div>
    </>
  );
};

export default BlogPage;
