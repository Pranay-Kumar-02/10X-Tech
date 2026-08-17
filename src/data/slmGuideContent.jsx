import React from 'react';
import { Link } from 'react-router-dom';

// Citation Link Component (Parses citation markers into interactive jump links)
const Cite = ({ targets }) => {
  const items = Array.isArray(targets) ? targets : [targets];
  return (
    <sup className="ml-0.5 inline-flex items-baseline gap-0.5 select-none font-sans font-semibold text-xs">
      {items.map((t, idx) => {
        const strVal = String(t);
        const sourceNum = parseInt(strVal);
        const anchorId = !isNaN(sourceNum) ? `source-${sourceNum}` : 'sources-section';
        const label = strVal.startsWith('[') && strVal.endsWith(']') ? strVal : `[${strVal}]`;
        
        return (
          <a
            key={idx}
            href={`#${anchorId}`}
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(anchorId);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.classList.add('bg-[#512da8]/30', 'ring-1', 'ring-[#a882ff]/50');
                setTimeout(() => {
                  el.classList.remove('bg-[#512da8]/30', 'ring-1', 'ring-[#a882ff]/50');
                }, 2000);
              }
            }}
            className="text-[#a882ff] hover:text-white hover:underline transition-colors focus:outline-none"
            title={`Jump to Source ${label}`}
          >
            {label}
          </a>
        );
      })}
    </sup>
  );
};

const SlmGuideContent = () => {
  return (
    <article className="prose prose-invert max-w-none text-[#ccc] text-lg font-light leading-relaxed space-y-10">
      
      {/* ## Highlight Section: Subtitle ## */}
      <div className="text-xl md:text-2xl font-normal text-[#e0e0e0] leading-relaxed border-l-4 border-[#512da8] pl-6 py-3 my-8 bg-[#512da8]/10 rounded-r-2xl shadow-lg">
        What SLMs are, how they differ from large language models (LLMs), where they work, where they fail, and what it takes to build and deploy them.
      </div>

      {/* ** Major Heading: The question we started with ** */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-4 border-t border-white/5">
          The question we started with
        </h2>
        <p className="leading-relaxed">
          When we began working on a smart speaker, one question kept coming back: Does a smart speaker actually need frontier-model intelligence? A user is unlikely to ask a smart speaker to write Python code for a website, hand it an entire software project and ask it to review the code, solve a complicated Olympiad mathematics problem, help defend a legal case, or run a complex research workflow. Most interactions are much simpler: “Set a timer for 10 minutes,” a simple fact such as “Who is the Prime Minister of India?”, a short conversation such as “How are you? I’m feeling a little happy today,” a request for a biryani recipe, or a device action such as increasing the volume or playing a song on Spotify. That led us to ask why a product that needs only a defined slice of intelligence should spend general-purpose model capacity on every request, and that question led us to small language models, or SLMs. This article is not an argument that small models replace large models; it is about when a smaller model can be the better engineering choice.
        </p>
      </section>

      {/* ** Major Heading: 1. What is a small language model? ** */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          1. What is a small language model?
        </h2>
        <p className="leading-relaxed">
          A small language model is very similar to a large language model, but it is smaller and needs much less computing power to run. It is usually built for a specific task, device, or environment rather than trying to handle everything.
        </p>
        <p className="leading-relaxed">
          The easiest way to understand an SLM is to look at what it is designed to do and where it is meant to run. There is no fixed parameter count that defines a model as “small.” IBM describes SLMs as ranging from a few million to a few billion parameters, while a recent survey notes that this boundary can change over time. Fastino, a company focused on AI deployment, discusses models below roughly ten billion parameters as small models.<Cite targets={[1, 3, 4]} /> A model can be small compared with a frontier model but still be too large for a phone, while the same model may work well on a laptop or embedded computer.
        </p>
        <p className="leading-relaxed text-[#aaa]">
          A model can be considered “small” simply because it is designed to use fewer resources than a much larger model. That does not mean it is less useful. A smaller model can be highly capable when it is built for a specific task and run in an environment where its size and efficiency matter.
        </p>
      </section>

      {/* ** Major Heading: 2. SLM vs LLM: Size & Speciality ** */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          2. SLM vs LLM: Size & Speciality
        </h2>
        <p className="leading-relaxed">
          SLMs and LLMs differ mainly in their size, scope, and the resources they need to run. An SLM is generally much smaller and can be built for a specific task, domain, language, or workflow, while an LLM is built to handle a much wider range of knowledge and tasks.<Cite targets={[1, 3, 4]} />
        </p>
        <p className="leading-relaxed">
          An LLM is a generalist, trained on broad data to handle many areas such as mathematics, programming, medicine, law, and everyday conversations. It is well suited to open-ended and unfamiliar problems.
        </p>
        <p className="leading-relaxed">
          An SLM can instead focus on the information and tasks needed for a specific use. It may know less about unrelated subjects, but can be highly capable within its domain while using much less compute and memory.
        </p>

        {/* $$ Boxed Section: Medicine Analogy $$ */}
        <div className="my-8 p-6 rounded-[20px] bg-[#111118] border border-[#512da8]/40 shadow-xl">
          <p className="text-base md:text-lg text-white font-medium italic leading-relaxed m-0">
            A useful analogy is medicine. A general physician covers a wide range of complaints, while a cardiologist works in a narrower field and develops deeper specialization there. The same idea can apply to models: a generalist is useful when the problem is broad, while a specialist is useful when the problem is clearly defined.<Cite targets={[3, 4]} />
          </p>
        </div>

        <p className="leading-relaxed">
          This does not mean every SLM is automatically a specialist or every LLM is automatically a generalist. A small model can still have broad capabilities, and a large model can be fine-tuned for a specific task. The practical advantage of an SLM is that when the job is well defined, you can deliberately give up some breadth and use a model whose size, capability, and resource requirements are better matched to that job.
        </p>
      </section>

      {/* ** Major Heading: 3. Why choose to build a small language model? ** */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          3. Why choose to build a small language model?
        </h2>
        <p className="leading-relaxed">
          The practical question is simple: why pay for general intelligence when the task is specific, or rely on a massive server infrastructure when a smaller model can handle the job locally? An SLM becomes especially useful when the task is clearly defined and the model needs to be small enough to run with limited compute, memory, or directly on a device.
        </p>

        {/* // Sub Heading: Economics // */}
        <div className="space-y-3 pl-4 border-l-2 border-[#512da8]/40">
          <h3 className="text-xl font-bold text-white">Economics</h3>
          <p className="leading-relaxed">
            Cloud inference is metered by input and output tokens, so even small per-token costs can become significant at scale.<Cite targets={[5, 6, 12, 13]} /> The better an AI becomes, the more people tend to use it. “Sam Altman said OpenAI was losing money on its $200-per-month ChatGPT Pro plan because users were using it more than expected.<Cite targets={[7]} />” For a large user base, higher usage means a continually growing API bill.
          </p>
          <p className="leading-relaxed">
            An on-device SLM requires an upfront investment to build and deploy, but local inference does not create a new external API charge for every interaction.
          </p>
        </div>

        {/* // Sub Heading: Predictable workloads // */}
        <div className="space-y-3 pl-4 border-l-2 border-[#512da8]/40">
          <h3 className="text-xl font-bold text-white">Predictable workloads</h3>
          <p className="leading-relaxed">
            An LLM is useful when the user can surprise it; an SLM is useful when the developer can often predict the workload. If the same kinds of questions arrive repeatedly, or nearly every request belongs to one problem, type, or curriculum, the model does not need to cover the rest of the world. That is the setting in which local deployment and specialized training can line up with the actual job.
          </p>
        </div>

        {/* // Sub Heading: Local inference // */}
        <div className="space-y-3 pl-4 border-l-2 border-[#512da8]/40">
          <h3 className="text-xl font-bold text-white">Local inference</h3>
          <p className="leading-relaxed">
            An SLM can run directly on the device, so data does not need to leave your phone, speaker, laptop, or computer. This can also avoid server maintenance, downtime, peak-usage issues, and per-request API costs. Local inference keeps sensitive data within the device while using its own compute, memory, and power, making it especially useful where privacy, reliability, or offline operation matters.
          </p>
        </div>
      </section>

      {/* ** Major Heading: 4. Where small language models genuinely work ** */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          4. Where small language models genuinely work
        </h2>
        <p className="leading-relaxed">
          The strongest SLM applications are usually the ones where the job is clearly defined and repeated often.
        </p>

        {/* $$ Boxed Section: A simple analogy $$ */}
        <div className="my-8 p-6 md:p-8 rounded-[24px] bg-[#0c0c14] border border-purple-500/30 shadow-2xl space-y-4">
          <h3 className="text-xl font-bold text-white mb-2">A simple analogy</h3>
          <p className="leading-relaxed text-[#ddd]">
            Imagine you are in a room with a bottle of water and two people. A small child and a thermodynamics engineer and You only need to know whether the bottle is cold.
          </p>
          <p className="leading-relaxed text-[#ddd]">
            You can simply ask the child, “Can you check whether the bottle is cold?” The child picks it up and say “Yes, it is cold.” The job is done. The child does not need to understand thermodynamics, heat transfer, or anything else.
          </p>
          <p className="leading-relaxed text-[#ddd]">
            You could also ask the thermodynamics engineer the exact same question. He can certainly answer it, but he has spent years learning things that are completely unnecessary for this particular task. Using all that knowledge and capability just to check whether a bottle is cold would be excessive.
          </p>
          <p className="leading-relaxed text-[#ddd]">
            The child represents an SLM, while the engineer represents an LLM. Both can solve this simple task, but the child can do it with much less computation and potentially much faster.
          </p>
        </div>

        <div className="space-y-4">
          {/* // Sub Heading: Narrow domains // */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Narrow domains</h3>
            <p className="leading-relaxed text-[#bbb]">
              Examples include a model for a particular textbook series, troubleshooting one product family, classifying or extracting standard documents, or handling one language or workflow. A narrow domain also makes it easier to define what good performance looks like.
            </p>
          </div>

          {/* // Sub Heading: Structured output // */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Structured output</h3>
            <p className="leading-relaxed text-[#bbb]">
              Some AI tasks are not really conversation problems. Suppose the system receives: “My payment was deducted but the order was not confirmed.” The required output might simply be:
            </p>
            <div className="my-3 p-4 rounded-xl bg-[#0a0a10] border border-white/10 font-mono text-sm text-[#a882ff]">
              &#123;"category":"payment_issue","priority":"high"&#125;
            </div>
            <p className="leading-relaxed text-[#bbb]">
              The model only needs to map language into a known structure.
            </p>
          </div>

          {/* // Sub Heading: Routing and triage // */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Routing and triage</h3>
            <p className="leading-relaxed text-[#bbb]">
              A small model can decide whether a request is about billing, homework, or support; which database or tool should handle it; or whether it should go to a larger model. It does not have to solve the final problem.
            </p>
          </div>

          {/* // Sub Heading: Retrieval-augmented tasks // */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Retrieval-augmented tasks</h3>
            <p className="leading-relaxed text-[#bbb]">
              Retrieval-augmented generation changes the problem because the model does not have to carry the entire knowledge base internally. The system can retrieve relevant material and give it to the model, which can then identify the relevant information and answer in a defined format.
            </p>
          </div>

          {/* // Sub Heading: High-volume repetitive work // */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">High-volume repetitive work</h3>
            <p className="leading-relaxed text-[#bbb]">
              If the same categories of questions arrive repeatedly, a compact model can be trained around that workload instead of using general-purpose capacity for every request.
            </p>
          </div>

          {/* // Sub Heading: Latency-sensitive interaction // */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Latency-sensitive interaction</h3>
            <p className="leading-relaxed text-[#bbb]">
              Smart speakers are one example. A user may ask for a timer, a simple fact, a device action, or a short conversation. A local model can keep these interactions close to the device instead of sending every request through a network round trip.
            </p>
          </div>
        </div>
      </section>

      {/* ** Major Heading: 5. Where small language models fail ** */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          5. Where small language models fail
        </h2>
        <p className="leading-relaxed">
          Do not think of an SLM as simply “ChatGPT offline” or a large model compressed into a few million parameters. An SLM is designed around a specific task, domain, or deployment need, so it can struggle with broad, unfamiliar, or reasoning-heavy problems.
        </p>
        <p className="leading-relaxed text-[#aaa]">
          It may also struggle with long-context tasks, unfamiliar subjects, or strict output formats. For open-ended work such as research, general coding, creative writing, or broad analysis, a larger general-purpose model may be the better choice.
        </p>
      </section>

      {/* ** Major Heading: 6. Why specialization can be an advantage ** */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          6. Why specialization can be an advantage
        </h2>
        <p className="leading-relaxed">
          Training a model to be good at everything can come with trade-offs. The Qwen3 technical report gives a useful example: after broader post-training, some of its specialised evaluation results went down. In Table 22, AIME’24 in thinking mode fell from 83.8 to 81.4, while LiveCodeBench v5 fell from 68.4 to 65.7.<Cite targets={["11, Table 22"]} /> The authors write, “We conjecture this degradation is due to the model being trained on a broader range of general tasks.”<Cite targets={["11, Table 22"]} />
        </p>
        <p className="leading-relaxed">
          This does not mean that a small specialist will beat a larger model. It simply shows that broader capability and specialised capability can sometimes pull in different directions. If a model has a clearly defined job, focusing its capacity on that job can make more sense than asking it to be good at everything.
        </p>
      </section>

      {/* ** Major Heading: 7. Why size matters: memory and latency ** */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          7. Why size matters: memory and latency
        </h2>
        <p className="leading-relaxed">
          Once you understand why smaller models can be useful, the next question is what their size changes. The two biggest effects are memory and latency.
        </p>

        {/* // Sub Heading: Memory // */}
        <div className="space-y-3 pl-4 border-l-2 border-white/10">
          <h3 className="text-xl font-bold text-white">Memory</h3>
          <p className="leading-relaxed">
            A model shares memory with the operating system and other applications. For example, 1 billion parameters need roughly 2 GB at FP16 or 0.5 GB at 4-bit precision, just for the weights. The actual requirement is higher because the runtime also needs memory.
          </p>
        </div>

        {/* // Sub Heading: Latency // */}
        <div className="space-y-3 pl-4 border-l-2 border-white/10">
          <h3 className="text-xl font-bold text-white">Latency</h3>
          <p className="leading-relaxed">
            Models generate text token by token, so speed affects how quickly users get an answer. At 40 tokens per second, a 120-token response takes about 3 seconds; at 20 tokens per second, about 6 seconds. Reasoning models can take longer because they may generate many reasoning tokens before the final answer.
          </p>
        </div>
      </section>

      {/* ** Major Heading: 8. Quantization and compression: where smaller gets smaller ** */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          8. Quantization and compression: where smaller gets smaller
        </h2>
        <p className="leading-relaxed">
          Quantization represents model values with fewer bits, such as moving from FP16 or BF16 to INT8 or 4-bit formats. This reduces storage and memory movement and can make deployment more efficient.<Cite targets={[4, 8]} />
        </p>
        <p className="leading-relaxed">
          Two common approaches are post-training quantization (PTQ), applied after training, and quantization-aware training (QAT), which accounts for quantization during training.<Cite targets={[4, 8]} /> Smaller models can be more sensitive to aggressive quantization because they have less capacity to absorb numerical error.
        </p>
        <p className="leading-relaxed">
          There is no universally best bit-width or quantization scheme. The right choice depends on the model, task, hardware, and runtime, so the final model should always be evaluated for the actual task.
        </p>
      </section>

      {/* ** Major Heading: 9. How you build one: training is where the real work starts ** */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          9. How you build one: training is where the real work starts
        </h2>
        <p className="leading-relaxed">
          There is no single recipe for building an SLM. You can continue pretraining an existing model, use SFT or LoRA for specialization, use distillation to transfer capabilities from a larger model, or train from scratch when you need full control.
        </p>

        <div className="space-y-4">
          {/* // Sub Heading: Continued pretraining // */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Continued pretraining</h3>
            <p className="leading-relaxed text-[#bbb]">
              Continued pretraining adapts an existing model to a domain-specific corpus. Data collection, cleaning, deduplication, and quality filtering are often the hardest parts.
            </p>
          </div>

          {/* // Sub Heading: Supervised fine-tuning // */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Supervised fine-tuning</h3>
            <p className="leading-relaxed text-[#bbb]">
              SFT trains the model on examples of the behavior you want, such as explaining a Class 8 mathematics concept at the right level and in the right format.
            </p>
          </div>

          {/* // Sub Heading: Knowledge distillation // */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Knowledge distillation</h3>
            <p className="leading-relaxed text-[#bbb]">
              Distillation uses a larger teacher model to train a smaller student around the capabilities that matter for the target task.<Cite targets={[4, 10]} /> Qwen3 also uses strong-to-weak distillation for its lightweight models.<Cite targets={[11]} />
            </p>
          </div>

          {/* // Sub Heading: LoRA and parameter-efficient adaptation // */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">LoRA and parameter-efficient adaptation</h3>
            <p className="leading-relaxed text-[#bbb]">
              LoRA trains a smaller set of additional parameters instead of changing all the model weights, making specialization more practical.<Cite targets={[9]} />
            </p>
          </div>

          {/* // Sub Heading: Training from scratch // */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Training from scratch</h3>
            <p className="leading-relaxed text-[#bbb]">
              Training from scratch gives you control over the architecture, tokenizer, data, languages, and objectives, but also requires building the training and evaluation pipeline yourself.
            </p>
          </div>
        </div>

        {/* $$ Boxed Section: What we have learned from our own work $$ */}
        <div className="my-8 p-6 md:p-8 rounded-[24px] bg-[#0f0f18] border border-purple-500/40 shadow-2xl space-y-3">
          <h3 className="text-xl font-bold text-white mb-2">What we have learned from our own work</h3>
          <p className="leading-relaxed text-[#ddd]">
            Small models leave less room for poor data and inefficient training decisions. Data quality, tokenization, deduplication, example quality, and evaluation all become critical.
          </p>
          <p className="leading-relaxed text-[#ddd]">
            We will explore these findings further in upcoming research blog updates and a research paper.
          </p>
        </div>
      </section>

      {/* ** Major Heading: 10. Tokenization is part of the model, not a preprocessing footnote ** */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          10. Tokenization is part of the model, not a preprocessing footnote
        </h2>
        <p className="leading-relaxed">
          A tokenizer breaks raw text into the tokens a model actually processes. This affects sequence length, context usage, vocabulary size, and inference efficiency. It matters even more for Indian languages, where users may write in different scripts, use transliteration, vary spelling, or mix languages.<Cite targets={[4]} />
        </p>

        {/* // Sub Heading: Fertility // */}
        <div className="space-y-3 pl-4 border-l-2 border-white/10">
          <h3 className="text-xl font-bold text-white">Fertility</h3>
          <p className="leading-relaxed">
            Fertility measures how many tokens are used to represent a given amount of text. Lower fertility generally means fewer tokens and less context and inference work. But the token boundaries also matter: a tokenizer should break words and expressions into useful pieces, not simply minimise the token count.
          </p>
        </div>

        {/* // Sub Heading: Embedding and non-embedding parameters // */}
        <div className="space-y-3 pl-4 border-l-2 border-white/10">
          <h3 className="text-xl font-bold text-white">Embedding and non-embedding parameters</h3>
          <p className="leading-relaxed">
            Embedding parameters map token IDs to vector representations, while non-embedding parameters make up the rest of the model's learned weights. Both are trainable and count toward the model's total size. In a small model, the embedding table can consume a significant part of the parameter budget, making tokenizer and vocabulary design especially important.
          </p>
        </div>

        {/* // Sub Heading: Indian-language tokenization // */}
        <div className="space-y-3 pl-4 border-l-2 border-white/10">
          <h3 className="text-xl font-bold text-white">Indian-language tokenization</h3>
          <p className="leading-relaxed">
            A user might write “photosynthesis ante enti?” in English script, Telugu script, or a mixture of Telugu and English. A tokenizer needs to handle these real-world forms efficiently, not just clean textbook text.
          </p>
        </div>

        {/* $$ Boxed Section: Akshara Tokenizer Link $$ */}
        <div className="my-8 p-6 rounded-[20px] bg-[#512da8]/15 border border-[#512da8]/40 shadow-xl space-y-2">
          <p className="leading-relaxed text-white font-medium">
            At 10X Technologies, we have also built Akshara, our family of SOTA Indic monolingual tokenizers. Read our detailed tokenizer guide here:{' '}
            <Link to="/tokenizer-prototype" className="text-[#a882ff] underline font-semibold hover:text-white transition-colors">
              Akshara Tokenizer Architecture Guide
            </Link>.
          </p>
        </div>
      </section>

      {/* ** Major Heading: 11. Evaluate the actual system ** */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          11. Evaluate the actual system
        </h2>
        <p className="leading-relaxed">
          A benchmark score is not a product. Public benchmarks are useful, but they may not resemble real production input, so a domain-specific held-out evaluation set is important. For a K–12 educational model, this could include misspellings, incomplete questions, code-mixed language, textbook terminology, different grade levels, ambiguous prompts, and unseen questions.
        </p>
        <p className="leading-relaxed">
          Accuracy is not enough either. A mathematically correct answer written at a Class 12 level can still fail a Class 5 student. Production evaluation should therefore measure what the product actually needs: correctness, format compliance, latency, language coverage, consistency, and failure behavior.
        </p>
      </section>

      {/* ** Major Heading: 12. Deployment is where the theory becomes real ** */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          12. Deployment is where the theory becomes real
        </h2>
        <p className="leading-relaxed">
          A model that works in a notebook can still fail as a product. Deployment brings its own challenges: runtime and model format, memory, heat, battery, updates, and differences between devices.<Cite targets={[2]} /> A model also needs to work reliably with the operating system and available CPU, GPU, or NPU, especially when memory is limited.
        </p>
        <p className="leading-relaxed">
          The model file must also be distributed and updated across devices, while different hardware can behave very differently. We would not publish a tokens-per-second claim without the device, precision, runtime, and generation conditions.
        </p>
      </section>

      {/* $$ Boxed Section: Conclusion $$ */}
      <section className="my-12 p-8 md:p-10 rounded-[28px] bg-gradient-to-b from-[#12121e] to-[#08080f] border border-[#512da8]/50 shadow-2xl text-center space-y-6">
        <h3 className="text-xl md:text-2xl font-bold text-[#a882ff] uppercase tracking-widest">THE CONCLUSION</h3>
        
        <p className="text-base md:text-lg text-[#ccc] leading-relaxed max-w-3xl mx-auto font-light">
          A large general-purpose model tries to be useful across a very large surface area, while a small specialized model deliberately focuses on a narrower one. If the task is broad and reasoning-heavy, a larger model may be better; if it is narrow, repetitive, high-volume, and well-defined, a smaller model may be enough. Local inference can also reduce dependence on network connectivity and remote services.
        </p>

        {/* ## Highlight Section: Conclusion Takeaway ## */}
        <div className="py-4 px-6 my-6 rounded-2xl bg-[#512da8]/20 border border-[#512da8]/40 shadow-inner max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
            The useful question is not “How large is the model?” but “How much intelligence does this particular job actually require?”
          </p>
        </div>

        <p className="text-[#aaa] text-base font-medium">
          At 10X Technologies, we work on small, task-specific language models and tokenizers for Indian languages.
        </p>
      </section>

      {/* Sources */}
      <section id="sources-section" className="pt-10 border-t border-white/10 text-sm text-[#888] space-y-4">
        <h4 className="text-white font-bold text-xl mb-4">Sources</h4>
        <ol className="list-decimal pl-5 space-y-2.5 leading-normal">
          <li id="source-1" className="p-1.5 rounded-lg transition-all duration-500">Fastino, “A Guide to Small Language Models (SLMs),” June 2026 — <a href="https://fastino.ai/blog/a-guide-to-small-language-models" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://fastino.ai/blog/a-guide-to-small-language-models</a></li>
          <li id="source-2" className="p-1.5 rounded-lg transition-all duration-500">John Johnson, “Small Language Models (SLM): A Comprehensive Overview,” community article published on Hugging Face — <a href="https://huggingface.co/blog/jjokah/small-language-model" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://huggingface.co/blog/jjokah/small-language-model</a></li>
          <li id="source-3" className="p-1.5 rounded-lg transition-all duration-500">IBM Think, “What are Small Language Models (SLM)?” — <a href="https://www.ibm.com/think/topics/small-language-models" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://www.ibm.com/think/topics/small-language-models</a></li>
          <li id="source-4" className="p-1.5 rounded-lg transition-all duration-500">“Small Language Models: Architectures, Techniques, Evaluation, Problems and Future Adaptation,” arXiv:2505.19529v2 — <a href="https://arxiv.org/html/2505.19529v2" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://arxiv.org/html/2505.19529v2</a></li>
          <li id="source-5" className="p-1.5 rounded-lg transition-all duration-500">OpenAI, “Pricing | OpenAI API,” accessed 14 August 2026 — <a href="https://developers.openai.com/api/docs/pricing?latest-pricing=standard" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://developers.openai.com/api/docs/pricing?latest-pricing=standard</a></li>
          <li id="source-6" className="p-1.5 rounded-lg transition-all duration-500">Google AI for Developers, “Gemini API pricing,” accessed 14 August 2026 — <a href="https://ai.google.dev/gemini-api/docs/pricing" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://ai.google.dev/gemini-api/docs/pricing</a></li>
          <li id="source-7" className="p-1.5 rounded-lg transition-all duration-500">TechCrunch, “OpenAI is losing money on its pricey ChatGPT Pro plan, CEO Sam Altman says,” 5 January 2025 — <a href="https://techcrunch.com/2025/01/05/OpenAI-is-losing-money-on-its-pricey-chatgpt-pro-plan-ceo-sam-altman-says/" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://techcrunch.com/2025/01/05/OpenAI-is-losing-money-on-its-pricey-chatgpt-pro-plan-ceo-sam-altman-says/</a></li>
          <li id="source-8" className="p-1.5 rounded-lg transition-all duration-500">Benoit Jacob et al., “Quantization and Training of Neural Networks for Efficient Integer-Arithmetic-Only Inference,” arXiv:1712.05877 — <a href="https://arxiv.org/abs/1712.05877" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://arxiv.org/abs/1712.05877</a></li>
          <li id="source-9" className="p-1.5 rounded-lg transition-all duration-500">Edward J. Hu et al., “LoRA: Low-Rank Adaptation of Large Language Models,” arXiv:2106.09685 — <a href="https://arxiv.org/abs/2106.09685" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://arxiv.org/abs/2106.09685</a></li>
          <li id="source-10" className="p-1.5 rounded-lg transition-all duration-500">Geoffrey Hinton, Oriol Vinyals, and Jeff Dean, “Distilling the Knowledge in a Neural Network,” arXiv:1503.02531 — <a href="https://arxiv.org/abs/1503.02531" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://arxiv.org/abs/1503.02531</a></li>
          <li id="source-11" className="p-1.5 rounded-lg transition-all duration-500">Qwen Team, “Qwen3 Technical Report,” arXiv:2505.09388 — <a href="https://arxiv.org/abs/2505.09388" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://arxiv.org/abs/2505.09388</a></li>
          <li id="source-12" className="p-1.5 rounded-lg transition-all duration-500">OpenAI, “OpenAI API Platform Documentation” — <a href="https://developers.openai.com/api/docs" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://developers.openai.com/api/docs</a></li>
          <li id="source-13" className="p-1.5 rounded-lg transition-all duration-500">Google AI for Developers, “Gemini API reference” — <a href="https://ai.google.dev/api" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://ai.google.dev/api</a></li>
          <li id="source-14" className="p-1.5 rounded-lg transition-all duration-500">Qwen, “Qwen on Hugging Face” — <a href="https://huggingface.co/Qwen" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://huggingface.co/Qwen</a></li>
        </ol>
      </section>
    </article>
  );
};

export default SlmGuideContent;

