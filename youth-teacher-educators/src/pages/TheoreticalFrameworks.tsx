import React from 'react';
import { Section, Card, GlossaryTooltip } from '../components';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Users, Globe, MessageSquare, TrendingUp } from 'lucide-react';

export const TheoreticalFrameworks: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-teal-800 mb-4">
          Theoretical Frameworks
        </h1>
        <p className="text-lg text-stone-600 max-w-3xl mx-auto">
          Explore the epistemological foundations of youth-centered, equity-oriented science and engineering education
        </p>
      </motion.div>

      {/* Section 1: Youth as Knowledge Producers */}
      <Section id="youth-knowledge-producers" title="Youth as Knowledge Producers">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-start space-x-4">
              <Lightbulb className="w-10 h-10 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-2 text-teal-800">Core Concept</h4>
                <p className="text-stone-700 leading-relaxed">
                  <GlossaryTooltip term="Youth as Knowledge Producers">
                    Youth knowledge and practices
                  </GlossaryTooltip>{' '}
                  are essential learning resources for teacher preparation—not supplementary or deficit-based.
                  This framework positions youth from marginalized communities as having valuable knowledge
                  that should inform how we prepare future teachers.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-orange-50">
            <h4 className="font-bold text-lg mb-3 text-orange-800">
              Before vs. After: A Comparison
            </h4>
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
                <p className="text-sm font-semibold text-red-800 mb-1">Deficit-Based Approach</p>
                <p className="text-sm text-red-700">
                  "These students lack the background knowledge for science. We need to fill in their gaps."
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                <p className="text-sm font-semibold text-green-800 mb-1">Asset-Based Approach</p>
                <p className="text-sm text-green-700">
                  "These students bring rich cultural and community knowledge. How can we build on what they already know?"
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-6">
          <h4 className="font-bold text-lg mb-3 text-teal-800">Real Example from Research</h4>
          <p className="text-stone-700 leading-relaxed mb-3">
            At Great Lakes City Community Center (2013-2018), youth like Faith, Christopher, and AD
            co-created multimodal case studies of their science and engineering learning experiences.
            These weren't just student work samples—they became teaching materials used in university
            teacher education courses, directly shaping how preservice teachers learned to teach.
          </p>
          <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
            <p className="text-sm italic text-teal-900">
              "Youth visited science methods courses to discuss their science and engineering learning
              experiences across K-9, offering critical insights on how the 'education debt' has affected
              their elementary, middle, and high school science education."
            </p>
          </div>
        </Card>
      </Section>

      {/* Section 2: Multiple Epistemologies Framework */}
      <Section id="multiple-epistemologies" title="Multiple Epistemologies Framework">
        <div className="mb-6">
          <Card>
            <div className="flex items-start space-x-4">
              <Globe className="w-10 h-10 text-teal-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-3 text-teal-800">What Are Multiple Epistemologies?</h4>
                <p className="text-stone-700 leading-relaxed mb-4">
                  <GlossaryTooltip term="Multiple Epistemologies">
                    Multiple epistemologies
                  </GlossaryTooltip>{' '}
                  recognize that students—particularly those from non-dominant communities—navigate
                  between different ways of knowing: community knowledge, Indigenous knowledge, family practices,
                  and Western scientific knowledge. This isn't about choosing one over another; it's about
                  supporting students in navigating across these knowledge systems.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-teal-50 to-teal-100">
            <h5 className="font-bold text-teal-800 mb-2">Community Knowledge</h5>
            <p className="text-sm text-stone-700">
              Local wisdom, cultural practices, and collective experience from the community
            </p>
          </Card>
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
            <h5 className="font-bold text-orange-800 mb-2">Cultural/Indigenous Knowledge</h5>
            <p className="text-sm text-stone-700">
              Traditional ecological knowledge and culturally-specific ways of understanding the world
            </p>
          </Card>
          <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100">
            <h5 className="font-bold text-yellow-800 mb-2">Western Scientific Knowledge</h5>
            <p className="text-sm text-stone-700">
              Formal science content and practices taught in schools
            </p>
          </Card>
        </div>

        <Card className="mt-6 bg-blue-50">
          <h4 className="font-bold text-lg mb-3 text-blue-900">
            <GlossaryTooltip term="Epistemological Border-Crossing">
              Epistemological Border-Crossing
            </GlossaryTooltip> in Action
          </h4>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-sm text-teal-800 mb-2">Example: Thanakha Paste</p>
              <p className="text-sm text-stone-700 leading-relaxed">
                Burmese refugee youth shared how their families use thanakha—a paste made from ground bark—for
                sun protection. In a weather and climate change unit, this became a bridge between cultural
                practice and scientific concepts about UV protection, connecting family knowledge with classroom science.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-sm text-teal-800 mb-2">Example: Karen Gardening Practices</p>
              <p className="text-sm text-stone-700 leading-relaxed">
                Karen refugee families brought agricultural knowledge from Burma into sustainability science
                lessons, showing how traditional farming practices embody ecological principles.
              </p>
            </div>
          </div>
        </Card>

        <div className="mt-6 p-6 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
          <h4 className="font-bold text-lg mb-3 text-yellow-900 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2" />
            Pause & Reflect
          </h4>
          <p className="text-stone-700 mb-3">
            Think about your own field placement or teaching context:
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>What community or cultural knowledge do your students bring to the classroom?</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>How might you create opportunities for students to navigate between different ways of knowing?</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>What would it look like to position this knowledge as legitimate scientific knowledge rather than just "personal experience"?</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Section 3: Rightful Presence vs. Equity as Inclusion */}
      <Section id="rightful-presence" title="Rightful Presence vs. Equity as Inclusion">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h4 className="font-bold text-lg mb-3 text-teal-800">Equity as Inclusion</h4>
            <p className="text-sm text-stone-700 mb-3 leading-relaxed">
              Traditional approach focused on:
            </p>
            <ul className="space-y-2 text-sm text-stone-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✗</span>
                <span>Adding diverse students to existing structures</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✗</span>
                <span>Helping students "fit into" science norms</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✗</span>
                <span>Surface-level representation</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✗</span>
                <span>Doesn't challenge systemic injustices</span>
              </li>
            </ul>
          </Card>

          <Card className="bg-teal-50">
            <h4 className="font-bold text-lg mb-3 text-teal-800">
              <GlossaryTooltip term="Rightful Presence">Rightful Presence</GlossaryTooltip>
            </h4>
            <p className="text-sm text-stone-700 mb-3 leading-relaxed">
              Justice-oriented approach focused on:
            </p>
            <ul className="space-y-2 text-sm text-stone-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Making present the lives of those made missing by schooling</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Political struggle for recognition and belonging</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Transforming norms, not just adding diversity</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Centering community knowledge as legitimate</span>
              </li>
            </ul>
          </Card>
        </div>

        <Card className="mt-6">
          <h4 className="font-bold text-lg mb-3 text-teal-800">Three Guiding Tenets</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-teal-50 p-4 rounded-lg">
              <h5 className="font-bold text-teal-800 mb-2">1. Coplanning</h5>
              <p className="text-sm text-stone-700">
                Disrupting norms of the science classroom by planning with students and community
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h5 className="font-bold text-orange-800 mb-2">2. Coproduction</h5>
              <p className="text-sm text-stone-700">
                Validating the community's powerful cultural knowledge through collaborative creation
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h5 className="font-bold text-yellow-800 mb-2">3. Community Ethnography</h5>
              <p className="text-sm text-stone-700">
                Centering relevant community experience as pedagogy itself
              </p>
            </div>
          </div>
        </Card>
      </Section>

      {/* Section 4: Critical Epistemologies of Place */}
      <Section id="epistemologies-of-place" title="Critical Epistemologies of Place">
        <Card>
          <div className="flex items-start space-x-4 mb-6">
            <Users className="w-10 h-10 text-teal-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-3 text-teal-800">What Is This Framework?</h4>
              <p className="text-stone-700 leading-relaxed">
                <GlossaryTooltip term="Critical Epistemologies of Place">
                  Epistemologies of place
                </GlossaryTooltip>{' '}
                are "embodied knowledge" arising from one's relationship with their environment.
                This is collective community knowledge or wisdom grounded within the various relationships
                among lived spaces and people. It's about recognizing that communities have powerful,
                ongoing knowledge generations within, of, and for their places.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-50 to-orange-50 p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-4 text-teal-900">The Iterative Three-Part Process</h4>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white p-4 rounded-lg border-l-4 border-teal-500"
              >
                <h5 className="font-bold text-teal-800 mb-2">1. Challenge Dominant Narratives</h5>
                <p className="text-sm text-stone-700">
                  Question who is portrayed as belonging in STEM and whose knowledge counts as science
                </p>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white p-4 rounded-lg border-l-4 border-orange-500"
              >
                <h5 className="font-bold text-orange-800 mb-2">2. Reimagine Practices in Place</h5>
                <p className="text-sm text-stone-700">
                  Situate engineering design and science learning within local contexts and community concerns
                </p>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white p-4 rounded-lg border-l-4 border-yellow-500"
              >
                <h5 className="font-bold text-yellow-800 mb-2">3. Transform the Dangerous Territory of STEM</h5>
                <p className="text-sm text-stone-700">
                  Make STEM more equitable and accessible by centering community wisdom
                </p>
              </motion.div>
            </div>
          </div>
        </Card>

        <div className="mt-6 p-6 bg-teal-900 text-white rounded-lg">
          <h4 className="font-bold text-lg mb-3 text-yellow-300">Why "Dangerous Territory"?</h4>
          <p className="text-sm leading-relaxed">
            Mainstream science teaching often teaches students that "their relationship with their place
            is marginal, uninteresting, and unimportant"—this is a form of epistemological violence.
            By centering place-based knowledge, we transform STEM from a space that erases student identity
            into one that honors and builds upon it.
          </p>
        </div>
      </Section>

      {/* Section 5: Counternarratives vs. Master Narratives */}
      <Section id="counternarratives" title="Counternarratives vs. Master Narratives">
        <div className="mb-6">
          <Card>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-red-800">
                  <GlossaryTooltip term="Master Narratives">Master Narratives</GlossaryTooltip>
                </h4>
                <p className="text-sm text-stone-700 mb-3">
                  Stories of the majority that obscure and normalize oppressive power in STEM:
                </p>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="bg-red-50 p-2 rounded">
                    "Poor kids can't do higher order thinking"
                  </li>
                  <li className="bg-red-50 p-2 rounded">
                    "Kids from the inner city can't code"
                  </li>
                  <li className="bg-red-50 p-2 rounded">
                    "These students lack the background for science"
                  </li>
                  <li className="bg-red-50 p-2 rounded">
                    "Real scientists don't talk about feelings or culture"
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-3 text-green-800">
                  <GlossaryTooltip term="Counternarratives">Counternarratives</GlossaryTooltip>
                </h4>
                <p className="text-sm text-stone-700 mb-3">
                  Stories that expose and challenge master narratives, creating space for resistance:
                </p>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="bg-green-50 p-2 rounded flex items-start">
                    <MessageSquare className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-green-600" />
                    <span>Youth designing complex engineering solutions to community problems</span>
                  </li>
                  <li className="bg-green-50 p-2 rounded flex items-start">
                    <MessageSquare className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-green-600" />
                    <span>Students creating sophisticated code for apps addressing local needs</span>
                  </li>
                  <li className="bg-green-50 p-2 rounded flex items-start">
                    <MessageSquare className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-green-600" />
                    <span>Youth teaching preservice teachers about authentic science learning</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <Card className="bg-orange-50">
          <h4 className="font-bold text-lg mb-4 text-orange-900">Interactive: Identify the Counternarrative</h4>
          <p className="text-sm text-stone-700 mb-4">
            Click on each master narrative to reveal the youth counternarrative from the research:
          </p>
          <div className="space-y-3">
            {[
              {
                master: "Urban youth can't engage in sophisticated scientific thinking",
                counter: "Faith, Christopher, and AD created multimodal case studies analyzing their own learning across years, using advanced concepts of identity, agency, and epistemology"
              },
              {
                master: "Engineering is too abstract for middle school students from marginalized communities",
                counter: "Youth designed wearable technology with solar panels, created anti-bullying apps, and solved real community problems through engineering"
              },
              {
                master: "Students need to learn basic science before they can create their own investigations",
                counter: "Youth co-developed research questions, collected data, and created teaching materials used in university courses—becoming teacher educators themselves"
              }
            ].map((item, index) => (
              <InteractiveCounternarrative key={index} master={item.master} counter={item.counter} />
            ))}
          </div>
        </Card>

        <div className="mt-6 p-6 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
          <h4 className="font-bold text-lg mb-3 text-yellow-900">Try This in Your Practice</h4>
          <p className="text-stone-700 mb-3">
            As you observe or teach in your placement:
          </p>
          <ol className="space-y-2 text-sm text-stone-700 list-decimal list-inside">
            <li>Notice when master narratives arise (in curriculum, conversations, or your own thinking)</li>
            <li>Look for evidence of student capability that contradicts these narratives</li>
            <li>Create opportunities for students to generate their own counternarratives</li>
            <li>Share these counternarratives with other educators</li>
          </ol>
        </div>
      </Section>
    </div>
  );
};

// Interactive component for counternarratives
const InteractiveCounternarrative: React.FC<{ master: string; counter: string }> = ({ master, counter }) => {
  const [isRevealed, setIsRevealed] = React.useState(false);

  return (
    <motion.div
      className="bg-white p-4 rounded-lg border-2 border-stone-200 cursor-pointer hover:border-teal-400 transition-colors"
      onClick={() => setIsRevealed(!isRevealed)}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-semibold text-red-700 mb-2">
            Master Narrative: "{master}"
          </p>
          <AnimatePresence>
            {isRevealed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 pt-3 border-t border-green-200"
              >
                <p className="text-sm font-semibold text-green-700 mb-1">Counternarrative:</p>
                <p className="text-sm text-stone-700 italic">"{counter}"</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.div
          animate={{ rotate: isRevealed ? 180 : 0 }}
          className="ml-3 text-teal-600"
        >
          ▼
        </motion.div>
      </div>
      {!isRevealed && (
        <p className="text-xs text-stone-500 mt-2">Click to reveal counternarrative</p>
      )}
    </motion.div>
  );
};
