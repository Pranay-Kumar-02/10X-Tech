import React from 'react';

const SlmGuideContent = () => {
  return (
    <article className="prose prose-invert max-w-none text-[#ccc] text-lg font-light leading-relaxed space-y-10">
      
      {/* Lead Paragraph / Subtitle */}
      <div className="text-xl md:text-2xl font-normal text-[#e0e0e0] leading-relaxed border-l-2 border-[#512da8] pl-6 py-2 my-8 bg-[#512da8]/5 rounded-r-2xl">
        What small language models are, how they differ from general-purpose models, where they work, where they fail, and what it takes to build and deploy them.
      </div>

      {/* The Question We Started With */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-4 border-t border-white/5">
          The question we started with
        </h2>
        <p className="leading-relaxed">
          When we began working on a smart speaker, one question kept coming back: <strong className="text-white font-semibold">Does a smart speaker actually need frontier-model intelligence?</strong> A smart speaker is not a coding workstation and does not need to review a software project, solve an unfamiliar Olympiad problem, compare legal precedents, or run a complex research workflow for every request. Most interactions are narrower: a timer, a simple fact, a short conversation, a recipe, or a device action. That led us to ask why a product that needs only a defined slice of intelligence should spend general-purpose model capacity on every request, and that question led us to small language models, or SLMs. This article is not an argument that small models replace large models; it is about when a smaller model can be the better engineering choice.
        </p>
      </section>

      {/* 1. What is a small language model? */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          1. What is a small language model?
        </h2>
        <p className="leading-relaxed">
          The easiest way to understand an SLM is not to start with a parameter-count definition. Start with the job it is expected to do. A small language model is a language model built to be small enough and efficient enough for a particular task, device, or deployment environment. There is no universally accepted parameter count at which a model becomes “small.” IBM describes SLMs as ranging from a few million to a few billion parameters, while a recent survey points out that the boundary changes with time. Fastino takes a practical, deployment-oriented view and discusses models below roughly the ten-billion-parameter range.<sup className="text-[#a882ff] font-semibold">[1][3][4]</sup> A model can be small compared with a frontier model and still be too large for a particular phone, while the same model might be reasonable on a laptop or embedded computer.
        </p>
        <p className="leading-relaxed text-[#aaa]">
          That is why “small” is not a quality judgment. A model can be weak at open-ended reasoning and still be useful at one narrow job if it is appropriately sized for the work it is supposed to perform.
        </p>
      </section>

      {/* 2. Small language models vs large language models */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          2. Small language models vs large language models: specialist vs generalist
        </h2>
        <p className="leading-relaxed">
          The clearest difference is not simply small versus large. It is often specialist versus generalist. A large language model is typically trained and aligned to be useful across a very wide range of questions. You can ask it a legal question, a medical question, a fitness question, a cooking question, a mathematics question, a programming question, or a history question, and broad coverage is part of the point of the model.
        </p>
        <p className="leading-relaxed">
          Think of that as a generalist. A small language model can be designed differently: instead of trying to know everything, you can train or adapt it around one domain, one workflow, one language, one document type, or one class of tasks, then expect it to be strong inside that boundary.
        </p>
        
        <div className="my-8 p-6 rounded-[20px] bg-[#111118] border border-white/10 shadow-lg">
          <p className="text-base md:text-lg text-white font-medium italic leading-relaxed m-0">
            "A useful analogy is medicine. A general physician covers a wide range of complaints, while a cardiologist works in a narrower field and develops deeper specialization there. The same distinction applies to models: the generalist is valuable because the problem is broad, while the specialist is valuable because the problem is bounded."<sup className="text-[#a882ff] font-semibold">[3][4]</sup>
          </p>
        </div>

        <p className="leading-relaxed">
          Imagine a hotel building an AI system for its chefs, staff, and guests. Most questions may concern ingredients, recipes, preparation techniques, cuisines, substitutions, allergens, kitchen procedures, menu items, and the hotel's own food documentation. That system does not necessarily need to be excellent at Python programming; it might be poor at Python and still be doing its job because Python is outside the job description.
        </p>
        <p className="leading-relaxed">
          The basic SLM idea is to give up breadth deliberately when the product does not need it; when it needs broad knowledge, open-ended reasoning, or unrelated capabilities, the generalist has the advantage.
        </p>
      </section>

      {/* 3. Why choose to build a small language model? */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          3. Why choose to build a small language model?
        </h2>
        <p className="leading-relaxed">
          The practical question is simple: why pay for general intelligence when the task is specific? A specialist is worth considering when the workload is predictable, repeated often, and clearly bounded enough that the full capability of a general-purpose model is not required on every interaction.
        </p>

        {/* Economics */}
        <div className="space-y-4 pl-4 border-l-2 border-[#512da8]/40">
          <h3 className="text-xl font-bold text-white">Economics</h3>
          <p className="leading-relaxed">
            Cloud inference is metered, so the cost of an AI feature scales with how much the feature is actually used. That creates a different economic profile from a model that runs locally: every additional interaction creates another billable event, and the price is set by the provider rather than owned by the product team.
          </p>
          <p className="leading-relaxed text-[#bbb]">
            As of August 2026, OpenAI lists <code className="text-[#a882ff] font-mono text-sm">gpt-5.6-sol</code>, <code className="text-[#a882ff] font-mono text-sm">gpt-5.6-terra</code>, and <code className="text-[#a882ff] font-mono text-sm">gpt-5.6-luna</code> in its API model lineup. The official pricing page lists gpt-5.6-sol at $5 per million input tokens and $30 per million output tokens; gpt-5.6-terra at $2 per million input tokens and $12 per million output tokens; and gpt-5.6-luna at $0.20 per million input tokens and $1.20 per million output tokens.<sup className="text-[#a882ff] font-semibold">[5][12]</sup>
          </p>
          <p className="leading-relaxed text-[#bbb]">
            Google's official Gemini pricing documentation lists Gemini 2.5 Flash-Lite at $0.10 per million input tokens and $0.40 per million output tokens on the standard paid tier, and gemini-3.7-flash at $0.75 per million input tokens and $3.75 per million output tokens through 31 December 2026.<sup className="text-[#a882ff] font-semibold">[6][13]</sup>
          </p>
          <p className="leading-relaxed">
            The question is what happens when usage becomes large. An API bill is a recurring operating expense that grows with adoption, while the product remains exposed to provider pricing changes, limits, packaging, and service terms. The product can therefore become more expensive to operate precisely because users are using the AI more heavily.
          </p>
          <p className="leading-relaxed text-[#bbb]">
            There is a useful real-world illustration. In January 2025, OpenAI CEO Sam Altman said the company was losing money on its $200-per-month ChatGPT Pro plan because subscribers were using it more than OpenAI had expected.<sup className="text-[#a882ff] font-semibold">[7]</sup> The point is not that every AI provider has the same economics. It is that better AI can increase usage, and the usage can grow faster than the price model was designed to absorb. For a large user base, a small per-request charge can become a substantial recurring annual expense.
          </p>
          <p className="leading-relaxed">
            An on-device SLM changes the shape of that expense. Building and deploying it requires a front-loaded investment in engineering, hardware, optimization, distribution, and maintenance, but inference itself is not metered by an external provider for each request. Once the model is deployed on the device, another interaction does not create another API invoice. The attraction is a shift from usage-linked operating expense toward a more predictable capital and engineering commitment.
          </p>
          <p className="leading-relaxed text-[#aaa]">
            For a product expected to scale, the question is what the AI layer costs as usage grows, how exposed that cost is to provider decisions, and how much of the inference stack the builder controls.
          </p>
        </div>

        {/* Predictable Workloads */}
        <div className="space-y-3 pl-4 border-l-2 border-[#512da8]/40">
          <h3 className="text-xl font-bold text-white">Predictable workloads</h3>
          <p className="leading-relaxed">
            A general model is useful when the user can surprise it; an SLM is useful when the developer can often predict the workload. If the same kinds of questions arrive repeatedly, or nearly every request belongs to one classification problem, document type, language, or curriculum, the model does not need to cover the rest of the world. That is the setting in which local deployment and specialized training can line up with the actual job.
          </p>
        </div>

        {/* Local Inference */}
        <div className="space-y-3 pl-4 border-l-2 border-[#512da8]/40">
          <h3 className="text-xl font-bold text-white">Local inference</h3>
          <p className="leading-relaxed">
            An SLM can also run directly on the device, so the request does not necessarily have to leave the phone, speaker, laptop, embedded computer, or other endpoint. That changes the architecture: there may be no per-request API meter, no network round trip, and no dependence on an external endpoint for that interaction. Local inference is not automatically “free” or “fully secure.” The device still consumes power, memory, storage, and engineering resources, and secure storage, updates, isolation, and access control still matter. For privacy-sensitive or disconnected environments, reducing transmitted data can be a meaningful architectural advantage.
          </p>
        </div>
      </section>

      {/* 4. Where small language models genuinely work */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          4. Where small language models genuinely work
        </h2>
        <p className="leading-relaxed">
          The strongest SLM applications are usually the ones where the job can be described clearly.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Narrow domains</h3>
            <p className="leading-relaxed text-[#bbb]">Examples include a model for a particular textbook series, troubleshooting one product family, classifying or extracting standard documents, or one language or workflow. A narrow domain makes “good” easier to define.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Structured output</h3>
            <p className="leading-relaxed text-[#bbb]">Some AI tasks are not really conversation problems. Suppose the system receives: <em>“My payment was deducted but the order was not confirmed.”</em> The required output might simply be:</p>
            <div className="my-3 p-4 rounded-xl bg-[#0a0a10] border border-white/10 font-mono text-sm text-[#a882ff]">
              &#123;"category":"payment_issue","priority":"high"&#125;
            </div>
            <p className="leading-relaxed text-[#bbb]">The model only needs to map language into a known structure.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Routing and triage</h3>
            <p className="leading-relaxed text-[#bbb]">A small model can decide whether a request is about billing, homework, or support; which database or tool should handle it; or whether it should go to a larger model. It does not have to solve the final problem.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Retrieval-augmented tasks</h3>
            <p className="leading-relaxed text-[#bbb]">Retrieval-augmented generation changes the problem because the model does not have to carry the entire knowledge base internally. The system can retrieve relevant material and give it to the model, which can then identify the relevant information and answer in a defined format.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-1">High-volume repetitive work</h3>
            <p className="leading-relaxed text-[#bbb]">If the same categories of questions arrive repeatedly, a compact model can be trained around that workload and avoid spending general-purpose capacity where it is rarely used.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Latency-sensitive interaction</h3>
            <p className="leading-relaxed text-[#bbb]">Smart speakers are one example. A user asks for a timer, a device action, a simple fact, or a short conversational response, and a local model can keep some interaction paths close to the device instead of sending every request through a network round trip. That does not mean every interaction belongs on-device.</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#512da8]/10 border border-[#512da8]/30 space-y-3 my-4">
            <h3 className="text-xl font-bold text-white">Education in India</h3>
            <p className="leading-relaxed text-[#ddd]">
              Consider a school system with a large number of learners. Students can ask the same types of questions repeatedly: science definitions, mathematics problems, textbook explanations, and requests to simplify a paragraph. Another approach is to build around the actual curriculum: syllabus, textbook vocabulary, grade-appropriate explanations, local terminology, answer formats, common student mistakes, curriculum-specific examples, and Indian languages and code-mixed questions.
            </p>
            <p className="leading-relaxed text-[#ddd]">
              The objective is to create a model that is useful for what students actually ask. That matters in India because a student may not ask a textbook question in textbook English. A real query might look like <span className="italic text-[#a882ff]">“Photosynthesis ante enti? Easy ga explain cheyyava?”</span>
            </p>
          </div>
        </div>
      </section>

      {/* 5. Where small language models fail */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          5. Where small language models fail
        </h2>
        <p className="leading-relaxed">
          SLMs are not miniature frontier models in every respect. Their limitations become visible when the task is broad, ambiguous, novel, or reasoning-heavy, and the more open-ended the expectation becomes, the more valuable broad general-purpose capability tends to be.
        </p>
        <p className="leading-relaxed">
          A model trained for a specific domain may not have sufficient coverage outside it. A culinary specialist can know an enormous amount about food and still be poor at operating-system internals, while a school model can know a curriculum extremely well and still be poor at an unfamiliar professional question. That may simply be the designed boundary. Problems that require several unfamiliar reasoning steps can expose the limits of a smaller model. Strong performance on patterns represented in training data does not guarantee success on genuinely novel problems, and long context creates both a capability problem and a memory problem.
        </p>
        <p className="leading-relaxed">
          Instruction following and format adherence create another class of failure. A model can be accurate in a benchmark and still fail operationally if it does not reliably follow application constraints. If an application requires valid JSON on every request, occasional malformed output can matter more than a small difference in knowledge accuracy.
        </p>
        <p className="leading-relaxed text-[#aaa]">
          Creative writing, broad synthesis, research, general coding, and open-ended analysis are where general-purpose capability becomes valuable. If users expect an assistant to handle almost anything, a narrow specialist may be the wrong tool. Confidence calibration adds another difficulty when the system must decide whether an answer should be trusted or escalated, and a workload dominated by broad knowledge, novel reasoning, long-context synthesis, or open-ended assistance may simply call for a frontier model.
        </p>
      </section>

      {/* 6. Why specialization can be an advantage */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          6. Why specialization can be an advantage
        </h2>
        <p className="leading-relaxed">
          Training for generality has a cost. A general-purpose model is asked to represent many domains, languages, tasks, behaviors, and interaction patterns, while a specialist does not have to spend its capacity on all of those things. The Qwen3 technical report provides a useful illustration of this trade-off because the authors describe it in their own post-training results.<sup className="text-[#a882ff] font-semibold">[11, Table 22]</sup> The report compares Qwen3-32B after Reasoning RL, Thinking Mode Fusion, and General RL. On AIME’24 in thinking mode, Table 22 reports 83.8 after Stage 2, 81.9 after Stage 3, and 81.4 after Stage 4; on LiveCodeBench v5, it reports 68.4, 67.2, and 65.7. MMLU-Redux moves from 91.4 to 91.0 to 90.9. The report then says, <em>“We conjecture this degradation is due to the model being trained on a broader range of general tasks.”</em><sup className="text-[#a882ff] font-semibold">[11, Table 22]</sup>
        </p>
        <p className="leading-relaxed text-[#bbb]">
          The authors interpret the later results as a trade-off: broader general-task training was accepted because it improved overall versatility, even though performance in the thinking mode on AIME’24 and LiveCodeBench decreased after the later stages. This does not prove that a small specialist generally beats a larger model; it supports the narrower point that broader and specialized capability can trade off.
        </p>
        <p className="leading-relaxed">
          Imagine two models. Model A may need coding, creative writing, multilingual conversation, broad factual knowledge, tool use, mathematics, and general reasoning. Model B may only need a defined class of educational questions in English and Indian-language variants. Model B does not need to solve every problem Model A solves; the objective is to make capacity match the job.
        </p>
      </section>

      {/* 7. Why size matters: memory and latency */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          7. Why size matters: memory and latency
        </h2>
        <p className="leading-relaxed">
          Once the conceptual question is clear, the engineering consequences become easier to understand. Model size affects memory and latency because the model has to store its parameters somewhere and process them during inference while the operating system, applications, and runtime also need resources.
        </p>

        <div className="space-y-3 pl-4 border-l-2 border-white/10">
          <h3 className="text-xl font-bold text-white">Memory</h3>
          <p className="leading-relaxed">
            A model has to share memory with the operating system, applications, runtime buffers, and other active processes. Suppose a model has 1 billion parameters. If its weights are stored at FP16, which uses 2 bytes per parameter, the weights alone require roughly 1 billion × 2 bytes ≈ 2 GB; at 4-bit precision, the same 1 billion parameters require roughly 1 billion × 0.5 bytes ≈ 0.5 GB. Those are estimates of the weights alone, not the total memory requirement, because the running system has other memory needs as well.
          </p>
        </div>

        <div className="space-y-3 pl-4 border-l-2 border-white/10">
          <h3 className="text-xl font-bold text-white">Latency</h3>
          <p className="leading-relaxed">
            Generative models usually produce output token by token. Consider a simple estimate: at 40 tokens/second, a 120-token answer takes about 3 seconds of generation time, while at 20 tokens/second the same answer takes about 6 seconds. Those are illustrative calculations, not universal benchmark results, and real systems also include prompt processing, scheduling, memory movement, device overhead, and application latency.
          </p>
          <p className="leading-relaxed text-[#bbb]">
            Reasoning models create another problem because the user may not see the final answer until the model has generated a substantial number of reasoning tokens. As an illustrative estimate, 800–2,000 reasoning tokens at 4 tokens/second would represent roughly 200–500 seconds, or 3 minutes 20 seconds to 8 minutes 20 seconds, before the final answer is ready. Reasoning-token counts and generation rates vary by model, hardware, runtime, and settings, so latency remains a product-design constraint.
          </p>
        </div>
      </section>

      {/* 8. Quantization and compression: where smaller gets smaller */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          8. Quantization and compression: where smaller gets smaller
        </h2>
        <p className="leading-relaxed">
          Quantization means representing model values with fewer bits. A model might use FP16 or BF16 and then be deployed with a lower-bit representation such as INT8 or a 4-bit format. Fewer bits mean less storage and less memory movement, and depending on the implementation and hardware can also reduce compute requirements.<sup className="text-[#a882ff] font-semibold">[4][8]</sup>
        </p>
        <p className="leading-relaxed">
          The effect matters at deployment because the model has to be stored, loaded, and repeatedly moved through the memory system during inference. A lower-precision representation therefore changes the amount of weight data the runtime has to work with, which is attractive because memory and movement are part of the practical cost of running a model. Post-training quantization (PTQ) applies the transformation after training. Quantization-aware training (QAT) incorporates quantization effects during training and can sometimes preserve more task quality at additional training cost.<sup className="text-[#a882ff] font-semibold">[4][8]</sup> The distinction matters because the final model is being asked to operate under a different numerical representation, and the preparation procedure can affect how well it survives that change.
        </p>
        <p className="leading-relaxed">
          In practice, the model can be represented with FP16 or BF16 or lower-bit schemes such as INT8 and 4-bit formats. There is no single quantized setting that is universally correct; the appropriate representation depends on the model, task, calibration process, quantization scheme, runtime, and hardware.
        </p>
        <p className="leading-relaxed text-[#bbb]">
          Smaller models can be less forgiving of aggressive quantization because there is less redundant capacity to absorb numerical error. That is a reason to be careful, not a reason to assume that a particular bit-width will fail. Quantized models can lose quality, and the amount of degradation depends on the model, task, calibration process, quantization scheme, and runtime.<sup className="text-[#a882ff] font-semibold">[4][8]</sup>
        </p>
        <p className="leading-relaxed">
          Quantization should therefore be treated as an empirical deployment decision. The engineering question is not how far the model can be compressed in isolation, but how far it can be compressed before the task-specific evaluation becomes unacceptable.
        </p>
      </section>

      {/* 9. How you build one: training is where the real work starts */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          9. How you build one: training is where the real work starts
        </h2>
        <p className="leading-relaxed">
          There is no single training recipe for a small language model. The method depends on what already exists, what the target task looks like, how much data is available, and whether the goal is to adapt a model or build one from scratch.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Continued pretraining</h3>
            <p className="leading-relaxed text-[#bbb]">Continued pretraining takes an existing language model and continues training it on a domain-specific corpus. This can help the model absorb domain language, terminology, and style, but the corpus is the hard part: collection, cleaning, deduplication, quality filtering, and contamination checks can consume more effort than the training run.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Supervised fine-tuning</h3>
            <p className="leading-relaxed text-[#bbb]">Supervised fine-tuning (SFT) trains a model on examples of the behavior you want. For example, an SFT dataset might pair <em>“Explain the Pythagorean theorem for a Class 8 student”</em> with the desired level, format, and style. The goal is to shape behavior and task execution, not just add facts.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Knowledge distillation</h3>
            <p className="leading-relaxed text-[#bbb]">Knowledge distillation uses a larger teacher model to provide supervision for a smaller student. The student can then be trained around the behavior that matters for the target task.<sup className="text-[#a882ff] font-semibold">[4][10]</sup> Licensing still needs to be checked because generated output is not automatically unrestricted training data. Qwen3 also uses strong-to-weak distillation for its lightweight models.<sup className="text-[#a882ff] font-semibold">[11]</sup></p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-1">LoRA and parameter-efficient adaptation</h3>
            <p className="leading-relaxed text-[#bbb]">Methods such as LoRA (Low-Rank Adaptation) update a relatively small set of additional parameters instead of changing every base-model weight.<sup className="text-[#a882ff] font-semibold">[9]</sup> That can make adaptation substantially more practical when the goal is to specialize an existing model rather than perform a full training run.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Training from scratch</h3>
            <p className="leading-relaxed text-[#bbb]">Training from scratch gives you control over architecture, tokenizer, corpus, objectives, languages, and domain, but also responsibility for the data pipeline, optimization stability, evaluation, infrastructure, and failure modes. For a narrow task, it is often unnecessary; for particular language, efficiency, licensing, or deployment requirements, it can be justified.</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#111118] border border-white/10 my-4">
          <h3 className="text-xl font-bold text-white mb-2">What we have learned from our own work</h3>
          <p className="leading-relaxed text-[#ddd] mb-3">
            Our own work has led us to one conclusion that is easy to underestimate: <strong>small models leave less room for sloppy data and inefficient training decisions.</strong> A large model has more representational capacity, so each pipeline decision can have a larger effect on a small specialist.
          </p>
          <p className="leading-relaxed text-[#ddd] m-0">
            For us, this has turned SLM training into a precision exercise: corpus quality, tokenization, example quality, deduplication, and evaluation become first-class engineering problems.
          </p>
        </div>
      </section>

      {/* 10. Tokenization is part of the model */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          10. Tokenization is part of the model, not a preprocessing footnote
        </h2>
        <p className="leading-relaxed">
          A tokenizer decides how raw text is broken into the units the model actually processes, affecting sequence length, vocabulary size, and context consumption. A multilingual model can support many languages without representing every one of them efficiently. This matters especially for Indian languages, where real user input can include multiple scripts, transliteration, spelling variation, and code-mixing. A tokenizer has to be evaluated against how people actually write.<sup className="text-[#a882ff] font-semibold">[4]</sup>
        </p>

        <div className="space-y-3 pl-4 border-l-2 border-white/10">
          <h3 className="text-xl font-bold text-white">Fertility: how efficiently does the tokenizer use tokens?</h3>
          <p className="leading-relaxed">
            Lower fertility generally means the same content can be represented in fewer tokens, reducing sequence length, context pressure, and inference work. But fertility is only an average. The actual token boundaries matter too: two tokenizers can have similar average fertility while one breaks important words, names, or code-mixed expressions into less useful pieces.
          </p>
          <p className="leading-relaxed text-[#bbb]">
            Reducing token counts with a larger vocabulary also increases the embedding table. A tokenizer therefore has to balance vocabulary size, segmentation quality, language coverage, and efficiency rather than optimising a single statistic in isolation.
          </p>
        </div>

        <div className="space-y-3 pl-4 border-l-2 border-white/10">
          <h3 className="text-xl font-bold text-white">Embedding and non-embedding parameters</h3>
          <p className="leading-relaxed">
            Embedding parameters are learned weights that map token IDs into vector representations. They are trainable parameters and count toward total model size. Non-embedding parameters are the rest of the model's learned weights: attention projections, feed-forward layers, normalization-related weights, output projections, and other architectural components.
          </p>
          <p className="leading-relaxed text-[#bbb]">
            It is too simplistic to say that non-embedding parameters “think” while embeddings merely “store information.” Both are learned parts of the model, and the embedding table can be a meaningful fraction of the parameter budget in a small model. Consider a hypothetical 200-million-parameter model with 50 million embedding parameters: that leaves 150 million non-embedding parameters, but it would be wrong to say only 150 million parameters are doing useful computation; it is correct that the embedding table consumes a quarter of the total budget.
          </p>
          <p className="leading-relaxed">
            That is one reason tokenizer design can matter disproportionately in small models: when the model is compact, the vocabulary and embedding table are part of the same budget.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#512da8]/15 border border-[#512da8]/40 space-y-3 my-4">
          <h3 className="text-xl font-bold text-white">Indian-language tokenization & Akshara</h3>
          <p className="leading-relaxed text-[#ddd]">
            A student may write <em>“photosynthesis ante enti?”</em>, or write a Telugu sentence using English characters, or mix Telugu words with English technical vocabulary. A production tokenizer has to be evaluated against those real forms.
          </p>
          <p className="leading-relaxed text-white font-medium">
            At 10X Technologies, we have built <strong>Akshara</strong>, our family of monolingual tokenizers for Indian-language use cases, because tokenizer design deserves the same engineering attention as the model architecture.
          </p>
        </div>
      </section>

      {/* 11. Evaluate the actual system */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          11. Evaluate the actual system
        </h2>
        <p className="leading-relaxed">
          A benchmark score is not a product. Public benchmarks are useful, but they often do not resemble production input, which is why a domain-specific held-out evaluation set is important. For a K–12 educational model, that evaluation should include misspellings, incomplete questions, code-mixed language, textbook terminology, student shorthand, ambiguous prompts, different grade levels, realistic distractors, and unseen questions. A benchmark being published after training does not, by itself, prove the model never encountered the underlying content, so contamination checks remain necessary.
        </p>
        <p className="leading-relaxed">
          Accuracy is not enough either. A mathematically correct answer written at a Class 12 level can still be a failure if the student is in Class 5. Production evaluation should therefore measure what the product actually needs: correctness, format compliance, latency, language coverage, consistency, and failure behavior.
        </p>
      </section>

      {/* 12. Deployment is where the theory becomes real */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          12. Deployment is where the theory becomes real
        </h2>
        <p className="leading-relaxed">
          A model that works in a notebook can still fail as a product. Deployment introduces runtime and model-format choices, memory pressure, thermal behavior, battery use, distribution, updates, and device fragmentation.<sup className="text-[#a882ff] font-semibold">[2]</sup>
        </p>
        <p className="leading-relaxed">
          The runtime and model format determine how the model is loaded and executed.<sup className="text-[#a882ff] font-semibold">[2]</sup> The practical question is not simply whether a model “runs,” but whether the model, runtime, and target hardware work together in the way the product requires. Under low-RAM conditions, the runtime is also sharing the device with the operating system and other applications, so idealised fit is not enough to establish reliable deployment, and the available CPU/GPU/NPU support can change which execution path is practical. Sustained generation also makes thermal behavior relevant. A brief run and a sustained workload differ, and thermal throttling can change those conditions over time. Battery use is another part of the same decision: on-device inference has to share the device's energy budget with the rest of the system, so a deployment target is not defined only by whether a model fits in memory.
        </p>
        <p className="leading-relaxed text-[#bbb]">
          The model also has to reach users. File size affects distribution and update mechanics, and the system needs a way to move devices from one model version to another without treating the model file as an afterthought. Finally, device fragmentation means that memory, compute support, runtimes, thermals, and acceleration can differ across endpoints, so a deployment needs a minimum supported specification rather than assuming that one device represents the whole fleet. We would not publish a tokens-per-second claim without the device, precision, runtime, and generation conditions.
        </p>
      </section>

      {/* 13. Hybrid systems and when not to use a small model */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-6 border-t border-white/5">
          13. Hybrid systems and when not to use a small model
        </h2>
        <p className="leading-relaxed">
          The choice does not always have to be SLM or frontier model. It can be SLM first, frontier model when necessary: send the request to the small model, determine whether the request is inside its competence boundary, return the answer if it is, and escalate the difficult case.
        </p>
        <p className="leading-relaxed">
          The hard part is the second step. Confidence thresholds, difficulty heuristics, explicit user escalation, and comparison between model outputs can all be used, but none is universally reliable. A conservative router escalates too much, while an aggressive router escalates too little.
        </p>
        <p className="leading-relaxed text-[#bbb]">
          There is also a point where an SLM is simply the wrong tool. A managed API or frontier model may be better when the workload is low volume, highly varied, reasoning-heavy, open-ended, difficult to define, or too expensive to get wrong. Cloud inference can be straightforward to adopt, but recurring cost follows usage.<sup className="text-[#a882ff] font-semibold">[5][6]</sup>
        </p>
      </section>

      {/* The Idea to Remember */}
      <section className="p-8 rounded-[24px] bg-gradient-to-b from-[#12121e] to-[#08080f] border border-[#512da8]/40 text-center my-12 shadow-2xl">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">The idea to remember</h3>
        <p className="text-lg text-[#ccc] leading-relaxed max-w-3xl mx-auto font-light mb-6">
          A large general-purpose model tries to be useful across a very large surface area, while a small specialized model can deliberately give up parts of that surface area. If the task is broad and reasoning-heavy, a larger model may be better; if it is narrow, repetitive, high-volume, and well-defined, a smaller model may be enough. Local inference can also reduce dependence on network connectivity and remote services. The useful question is therefore not <span className="text-white font-semibold font-mono text-base">“How large is the model?”</span> but <span className="text-[#a882ff] font-semibold font-mono text-base">“How much intelligence does this particular job actually require?”</span>
        </p>
        <p className="text-[#888] text-sm font-medium">
          At 10X Technologies, we work on small, task-specific language models and tokenizers for Indian languages.
        </p>
      </section>

      {/* Sources */}
      <section className="pt-10 border-t border-white/10 text-sm text-[#888] space-y-4">
        <h4 className="text-white font-bold text-xl mb-4">Sources</h4>
        <ol className="list-decimal pl-5 space-y-2.5 leading-normal">
          <li>Fastino, “A Guide to Small Language Models (SLMs),” June 2026 — <a href="https://fastino.ai/blog/a-guide-to-small-language-models" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://fastino.ai/blog/a-guide-to-small-language-models</a></li>
          <li>John Johnson, “Small Language Models (SLM): A Comprehensive Overview,” community article published on Hugging Face — <a href="https://huggingface.co/blog/jjokah/small-language-model" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://huggingface.co/blog/jjokah/small-language-model</a></li>
          <li>IBM Think, “What are Small Language Models (SLM)?” — <a href="https://www.ibm.com/think/topics/small-language-models" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://www.ibm.com/think/topics/small-language-models</a></li>
          <li>“Small Language Models: Architectures, Techniques, Evaluation, Problems and Future Adaptation,” arXiv:2505.19529v2 — <a href="https://arxiv.org/html/2505.19529v2" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://arxiv.org/html/2505.19529v2</a></li>
          <li>OpenAI, “Pricing | OpenAI API,” accessed 14 August 2026 — <a href="https://developers.openai.com/api/docs/pricing?latest-pricing=standard" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://developers.openai.com/api/docs/pricing?latest-pricing=standard</a></li>
          <li>Google AI for Developers, “Gemini API pricing,” accessed 14 August 2026 — <a href="https://ai.google.dev/gemini-api/docs/pricing" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://ai.google.dev/gemini-api/docs/pricing</a></li>
          <li>TechCrunch, “OpenAI is losing money on its pricey ChatGPT Pro plan, CEO Sam Altman says,” 5 January 2025 — <a href="https://techcrunch.com/2025/01/05/OpenAI-is-losing-money-on-its-pricey-chatgpt-pro-plan-ceo-sam-altman-says/" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://techcrunch.com/2025/01/05/OpenAI-is-losing-money-on-its-pricey-chatgpt-pro-plan-ceo-sam-altman-says/</a></li>
          <li>Benoit Jacob et al., “Quantization and Training of Neural Networks for Efficient Integer-Arithmetic-Only Inference,” arXiv:1712.05877 — <a href="https://arxiv.org/abs/1712.05877" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://arxiv.org/abs/1712.05877</a></li>
          <li>Edward J. Hu et al., “LoRA: Low-Rank Adaptation of Large Language Models,” arXiv:2106.09685 — <a href="https://arxiv.org/abs/2106.09685" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://arxiv.org/abs/2106.09685</a></li>
          <li>Geoffrey Hinton, Oriol Vinyals, and Jeff Dean, “Distilling the Knowledge in a Neural Network,” arXiv:1503.02531 — <a href="https://arxiv.org/abs/1503.02531" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://arxiv.org/abs/1503.02531</a></li>
          <li>Qwen Team, “Qwen3 Technical Report,” arXiv:2505.09388 — <a href="https://arxiv.org/abs/2505.09388" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://arxiv.org/abs/2505.09388</a></li>
          <li>OpenAI, “OpenAI API Platform Documentation” — <a href="https://developers.openai.com/api/docs" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://developers.openai.com/api/docs</a></li>
          <li>Google AI for Developers, “Gemini API reference” — <a href="https://ai.google.dev/api" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://ai.google.dev/api</a></li>
          <li>Qwen, “Qwen on Hugging Face” — <a href="https://huggingface.co/Qwen" target="_blank" rel="noreferrer" className="text-[#a882ff] underline hover:text-white transition-colors">https://huggingface.co/Qwen</a></li>
        </ol>
      </section>
    </article>
  );
};

export default SlmGuideContent;
