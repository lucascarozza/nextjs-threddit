import Card from "@/components/Card/Card";
import { faq } from "./faqData";

const HelpCenter: React.FC = () => {
  return (
    <section className="px-4 pt-6 md:pt-10 lg:px-20">
      <Card
        outerClassName="w-full min-h-162"
        innerClassName="min-h-162 gap-6 px-6 py-8"
      >
        <h2 className="text-3xl font-bold">Help Center</h2>

        <div className="space-y-2 text-lg leading-relaxed">
          {faq.map((item, index) => (
            <details
              key={index}
              className="bg-zinc-700 px-4 py-3 rounded-3xl cursor-pointer"
            >
              <summary className="font-bold">{item.question}</summary>
              <hr className="border-zinc-600 my-2" />
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default HelpCenter;
