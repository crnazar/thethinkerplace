import React, { useState } from 'react';
import { Section, Card, Button, ProgressBar } from '../components';
import { motion } from 'framer-motion';
import { Download, BookOpen, FileText, CheckCircle, BookmarkPlus, BookmarkCheck } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { toggleBookmark, addReflection, clearProgress } from '../utils/storage';

export const Resources: React.FC = () => {
  const { progress, completionPercentage } = useProgress();
  const [reflectionText, setReflectionText] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState('');

  const handleAddReflection = () => {
    if (reflectionText.trim() && selectedPrompt) {
      addReflection({
        prompt: selectedPrompt,
        response: reflectionText,
        section: 'general-reflection',
      });
      setReflectionText('');
      setSelectedPrompt('');
      alert('Reflection saved!');
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-teal-800 mb-4">
          Resources & Reflection
        </h1>
        <p className="text-lg text-stone-600 max-w-3xl mx-auto">
          Self-assessment tools, downloadable resources, and reflection journal
        </p>
      </motion.div>

      {/* Progress Dashboard */}
      <Section id="progress-dashboard" title="Your Learning Progress">
        <Card className="bg-gradient-to-r from-teal-50 to-blue-50">
          <div className="mb-6">
            <ProgressBar percentage={completionPercentage} showLabel={true} />
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-teal-700">{progress.completedSections.length}</p>
              <p className="text-sm text-stone-600">Sections Completed</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-orange-600">{progress.bookmarkedResources.length}</p>
              <p className="text-sm text-stone-600">Resources Bookmarked</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-yellow-600">{progress.reflections.length}</p>
              <p className="text-sm text-stone-600">Reflections Written</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-stone-700 mb-2">Learning Journey</h4>
            <p className="text-sm text-stone-600 mb-1">
              Started: {new Date(progress.startDate).toLocaleDateString()}
            </p>
            <p className="text-sm text-stone-600">
              Last Visit: {new Date(progress.lastAccessDate).toLocaleDateString()}
            </p>
          </div>

          {completionPercentage === 100 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mt-6 bg-green-100 border-2 border-green-400 rounded-lg p-6 text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">Congratulations!</h3>
              <p className="text-green-700">
                You've completed your journey through youth-centered, equity-oriented STEM education.
              </p>
            </motion.div>
          )}
        </Card>
      </Section>

      {/* Self-Assessment Tools */}
      <Section id="self-assessment" title="Self-Assessment Tools">
        <Card>
          <h4 className="font-bold text-lg text-teal-800 mb-4">
            Equity-Oriented Teaching Beliefs Questionnaire
          </h4>
          <p className="text-sm text-stone-700 mb-4">
            Rate your agreement with each statement (1 = Strongly Disagree, 5 = Strongly Agree):
          </p>
          <SelfAssessmentQuestionnaire />
        </Card>

        <Card className="mt-6">
          <h4 className="font-bold text-lg text-teal-800 mb-4">
            Youth-Centered Practice Rubric
          </h4>
          <PracticeRubric />
        </Card>
      </Section>

      {/* Downloadable Resources */}
      <Section id="downloadable-resources" title="Downloadable Resources">
        <div className="grid md:grid-cols-2 gap-6">
          <ResourceCard
            id="ypar-template"
            title="YPAR Planning Template"
            description="Guide for designing youth-participatory action research projects"
            type="template"
            bookmarked={progress.bookmarkedResources.includes('ypar-template')}
          />
          <ResourceCard
            id="community-ethnography"
            title="Community Ethnography Student Handout"
            description="Scaffolded guide for students conducting community research"
            type="template"
            bookmarked={progress.bookmarkedResources.includes('community-ethnography')}
          />
          <ResourceCard
            id="efsc-unit-plan"
            title="EfSC Unit Plan Template"
            description="Template for Engineering for Sustainable Communities units"
            type="template"
            bookmarked={progress.bookmarkedResources.includes('efsc-unit-plan')}
          />
          <ResourceCard
            id="multimodal-case-guide"
            title="Multimodal Case Study Creation Guide"
            description="Step-by-step guide for supporting youth in creating teaching cases"
            type="guide"
            bookmarked={progress.bookmarkedResources.includes('multimodal-case-guide')}
          />
          <ResourceCard
            id="theoretical-frameworks"
            title="Theoretical Frameworks Summary"
            description="One-page visual summary of key frameworks and concepts"
            type="pdf"
            bookmarked={progress.bookmarkedResources.includes('theoretical-frameworks')}
          />
          <ResourceCard
            id="assessment-tools"
            title="Equity-Oriented Assessment Tools"
            description="Rubrics and checklists for evaluating youth-centered teaching"
            type="template"
            bookmarked={progress.bookmarkedResources.includes('assessment-tools')}
          />
        </div>
      </Section>

      {/* Academic Readings */}
      <Section id="academic-readings" title="Key Academic Readings & Citations">
        <Card>
          <h4 className="font-bold text-lg text-teal-800 mb-4">Primary Research</h4>
          <div className="space-y-4">
            <Citation
              title="Youth as Teacher Educators: Supporting Preservice Teachers in Developing Youth-Centered, Equity-Oriented Science Teaching Practices"
              authors="Nazar, C. R."
              year="2018"
              publication="Ph.D. Dissertation, Michigan State University"
              note="Winner of 2020 AACTE Outstanding Dissertation Award"
            />
            <Citation
              title="Critically engaging engineering in place by localizing counternarratives in engineering design"
              authors="Nazar, C. R., Calabrese Barton, A., Morris, C., & Tan, E."
              year="2019"
              publication="Science Education, 103(3), 638-664"
              doi="10.1002/sce.21500"
            />
            <Citation
              title="faiTh'S fancy haT"
              authors="Nazar, C. R., Calabrese Barton, A., & Rollins, A."
              year="2017"
              publication="In D. Stroupe (Ed.), Reframing Science Teaching and Learning: Students and Educators Co-Developing Science Practices In and Out of School (pp. 97-114). Routledge"
            />
          </div>
        </Card>

        <Card className="mt-6">
          <h4 className="font-bold text-lg text-teal-800 mb-4">Related Frameworks</h4>
          <div className="space-y-4">
            <Citation
              title="Beyond equity as inclusion: A framework of 'rightful presence' for guiding justice-oriented studies in teaching and learning"
              authors="Calabrese Barton, A., & Tan, E."
              year="2020"
              publication="Educational Researcher, 49(6), 433-440"
            />
            <Citation
              title="Designing for rightful presence in STEM: Community ethnography as pedagogy"
              authors="Calabrese Barton, A., & Tan, E."
              year="2019"
              publication="Journal of the Learning Sciences"
              note="Winner of 2019 Best Paper of the Year Award"
            />
            <Citation
              title="Engineering for sustainable communities: Epistemic tools in support of equitable and consequential middle school engineering"
              authors="Tan, E., Calabrese Barton, A., & Benavides, A."
              year="2019"
              publication="Science Education, 103(4), 1011-1046"
              doi="10.1002/sce.21515"
            />
            <Citation
              title="Hacking a path into and through STEM: Exploring how youth build connecting pathways between STEM-related landscapes"
              authors="Tan, E., & Calabrese Barton, A."
              year="2020"
              publication="Teachers College Record, 122(2)"
            />
          </div>
        </Card>

        <Card className="mt-6">
          <h4 className="font-bold text-lg text-teal-800 mb-4">Books</h4>
          <div className="space-y-4">
            <Citation
              title="Teaching Toward Rightful Presence in Middle School STEM"
              authors="Tan, E., Calabrese Barton, A., & Philip, T. M."
              year="2023"
              publication="Harvard Education Press"
            />
            <Citation
              title="STEM-Rich Maker Learning: Designing for Equity with Youth of Color"
              authors="Calabrese Barton, A., & Tan, E."
              year="2018"
              publication="Teachers College Press"
            />
          </div>
        </Card>
      </Section>

      {/* Reflection Journal */}
      <Section id="reflection-journal" title="Reflection Journal">
        <Card>
          <h4 className="font-bold text-lg text-teal-800 mb-4">Guided Reflection</h4>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Select a reflection prompt:
            </label>
            <select
              value={selectedPrompt}
              onChange={(e) => setSelectedPrompt(e.target.value)}
              className="w-full p-3 border-2 border-teal-300 rounded-lg focus:border-teal-500 focus:outline-none"
            >
              <option value="">Choose a prompt...</option>
              <option value="How has your understanding of youth knowledge changed?">
                How has your understanding of youth knowledge changed through this learning?
              </option>
              <option value="What master narratives do you notice in your context?">
                What master narratives about students and STEM do you notice in your field placement?
              </option>
              <option value="How will you center community knowledge?">
                How will you center community knowledge in your future teaching?
              </option>
              <option value="What challenges do you anticipate?">
                What challenges do you anticipate in implementing equity-oriented practices?
              </option>
              <option value="What resources do you need?">
                What resources or support would help you enact youth-centered teaching?
              </option>
            </select>
          </div>

          {selectedPrompt && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="mb-4 p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                <p className="font-semibold text-teal-900">{selectedPrompt}</p>
              </div>
              <textarea
                value={reflectionText}
                onChange={(e) => setReflectionText(e.target.value)}
                placeholder="Write your reflection here..."
                className="w-full p-4 border-2 border-stone-200 rounded-lg focus:border-teal-500 focus:outline-none min-h-[200px]"
              />
              <div className="mt-4 flex justify-end">
                <Button onClick={handleAddReflection}>
                  Save Reflection
                </Button>
              </div>
            </motion.div>
          )}
        </Card>

        {progress.reflections.length > 0 && (
          <Card className="mt-6">
            <h4 className="font-bold text-lg text-teal-800 mb-4">Your Previous Reflections</h4>
            <div className="space-y-4">
              {progress.reflections.slice(-5).reverse().map((reflection) => (
                <div key={reflection.id} className="bg-stone-50 p-4 rounded-lg">
                  <p className="text-xs text-stone-500 mb-1">
                    {new Date(reflection.date).toLocaleDateString()}
                  </p>
                  <p className="font-semibold text-teal-800 text-sm mb-2">{reflection.prompt}</p>
                  <p className="text-sm text-stone-700">{reflection.response}</p>
                </div>
              ))}
            </div>
          </Card>
        )}
      </Section>

      {/* Discussion Prompts */}
      <Section id="discussion-prompts" title="Discussion & Reflection Prompts">
        <Card>
          <h4 className="font-bold text-lg text-teal-800 mb-4">For Professional Learning Communities</h4>
          <div className="space-y-3">
            {[
              'How do we currently position youth knowledge in our curriculum? What would it look like to position it as essential rather than supplementary?',
              'What counternarratives exist among our students that challenge dominant STEM narratives?',
              'How can we create opportunities for students to become teacher educators in our context?',
              'What community knowledge and practices could inform our STEM units?',
              'How do we support students in navigating multiple epistemologies rather than erasing their home knowledge?'
            ].map((prompt, i) => (
              <div key={i} className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-sm text-stone-800">{prompt}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="mt-6">
          <h4 className="font-bold text-lg text-teal-800 mb-4">For Self-Study</h4>
          <div className="space-y-3">
            {[
              'Identify one master narrative you\'ve internalized about students and STEM. What evidence contradicts it?',
              'Document one example of student knowledge that could be positioned as legitimate STEM knowledge',
              'Plan one lesson modification that would center community knowledge',
              'Reflect on your own epistemological border-crossing experiences. How does this inform your teaching?'
            ].map((prompt, i) => (
              <div key={i} className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-sm text-stone-800">{prompt}</p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* Clear Progress */}
      <div className="mt-12 p-6 bg-stone-100 rounded-lg border-2 border-stone-300">
        <h4 className="font-bold text-lg text-stone-800 mb-2">Reset Progress</h4>
        <p className="text-sm text-stone-600 mb-4">
          Clear all saved progress, reflections, and bookmarks to start fresh.
        </p>
        <Button
          onClick={() => {
            if (confirm('Are you sure? This will delete all your progress and reflections.')) {
              clearProgress();
              window.location.reload();
            }
          }}
          variant="outline"
          size="sm"
        >
          Clear All Progress
        </Button>
      </div>
    </div>
  );
};

// Supporting Components

const ResourceCard: React.FC<{
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'template' | 'guide';
  bookmarked: boolean;
}> = ({ id, title, description, type, bookmarked }) => {
  const icons = {
    pdf: <FileText className="w-6 h-6" />,
    template: <FileText className="w-6 h-6" />,
    guide: <BookOpen className="w-6 h-6" />,
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start space-x-3">
          <div className="text-teal-600">{icons[type]}</div>
          <div className="flex-1">
            <h5 className="font-bold text-teal-800 mb-1">{title}</h5>
            <p className="text-sm text-stone-600">{description}</p>
          </div>
        </div>
        <button
          onClick={() => toggleBookmark(id)}
          className="text-orange-500 hover:text-orange-700 flex-shrink-0"
        >
          {bookmarked ? <BookmarkCheck className="w-6 h-6" /> : <BookmarkPlus className="w-6 h-6" />}
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <Button size="sm" variant="primary">
          <Download className="w-4 h-4 mr-1" />
          Download
        </Button>
        <span className="text-xs text-stone-500 uppercase">{type}</span>
      </div>
    </Card>
  );
};

const Citation: React.FC<{
  title: string;
  authors: string;
  year: string;
  publication: string;
  doi?: string;
  note?: string;
}> = ({ title, authors, year, publication, doi, note }) => {
  return (
    <div className="bg-stone-50 p-4 rounded-lg border-l-4 border-teal-500">
      <p className="text-sm text-stone-800 mb-2">
        <span className="font-semibold">{authors}</span> ({year}). <em>{title}</em>. {publication}.
      </p>
      {doi && <p className="text-xs text-stone-600 mb-1">DOI: {doi}</p>}
      {note && (
        <div className="mt-2 bg-yellow-100 px-2 py-1 rounded inline-block">
          <p className="text-xs text-yellow-900 font-semibold">{note}</p>
        </div>
      )}
    </div>
  );
};

const SelfAssessmentQuestionnaire: React.FC = () => {
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});

  const statements = [
    'Youth from marginalized communities bring valuable knowledge to STEM learning',
    'Community knowledge is legitimate scientific knowledge, not just personal experience',
    'Students should help define what we study in science/engineering',
    'My role is to build on what students already know rather than fill gaps',
    'Equity requires transforming STEM norms, not just adding diversity',
  ];

  return (
    <div className="space-y-4">
      {statements.map((statement, i) => (
        <div key={i} className="bg-stone-50 p-4 rounded-lg">
          <p className="text-sm text-stone-800 mb-3">{statement}</p>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => setRatings({ ...ratings, [i]: value })}
                className={`w-12 h-12 rounded-full border-2 transition-all ${
                  ratings[i] === value
                    ? 'bg-teal-600 border-teal-600 text-white font-bold'
                    : 'border-stone-300 text-stone-600 hover:border-teal-400'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const PracticeRubric: React.FC = () => {
  const criteria = [
    {
      aspect: 'Positioning Youth Knowledge',
      levels: ['Deficit-based', 'Acknowledged but supplementary', 'Valued alongside school knowledge', 'Essential and central to learning']
    },
    {
      aspect: 'Community Engagement',
      levels: ['No connection', 'Surface references', 'Authentic partnerships', 'Community co-created curriculum']
    },
    {
      aspect: 'Student Agency',
      levels: ['Teacher-directed', 'Some student choice', 'Significant student input', 'Youth lead and co-design']
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-teal-100">
            <th className="p-2 text-left">Aspect</th>
            <th className="p-2 text-left">Developing</th>
            <th className="p-2 text-left">Emerging</th>
            <th className="p-2 text-left">Practicing</th>
            <th className="p-2 text-left">Exemplary</th>
          </tr>
        </thead>
        <tbody>
          {criteria.map((criterion, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-stone-50' : 'bg-white'}>
              <td className="p-2 font-semibold text-teal-800">{criterion.aspect}</td>
              {criterion.levels.map((level, j) => (
                <td key={j} className="p-2 text-xs text-stone-700">{level}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
