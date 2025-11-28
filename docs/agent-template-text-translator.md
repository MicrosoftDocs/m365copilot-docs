---
title: Create a Text Translator agent from a template
description: Learn how to use the Text Translator template in the Copilot Studio lite experience to create a declarative agent.
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 12/01/2025
---

# Use the Text Translator template to build an agent

Use the **Text Translator template**, available in Microsoft 365 Copilot when you use the Agent Builder feature, to build an agent that helps users break language barriers by translating text between languages and improving overall writing quality. The Text Translator agent can even support language learning by explaining idioms or suggesting synonyms, making it a versatile tool for educational and practical translation needs.

## Prerequisites

Before you begin working with the Text Translator template, make sure you have:

- A working knowledge of how to [build agents with the Copilot Studio lite experience](copilot-studio-lite-build.md).
- An understanding of how to [write effective instructions for declarative agents](declarative-agent-instructions.md).

## Capabilities

Text Translator agents are useful in a wide range of scenarios where language or tone is a factor. The following table outlines key use cases and how the agent adds value in each.

| Scenario | Description |
|---|---|
| **Tone adjustment for professional communication** | Rewriting a message to fit a professional or formal setting. For example, an employee can draft an email informally and then ask the agent to adjust the tone: "Hey, can you send me the report?" becomes a more polite, business-appropriate request. The agent preserves the intent but uses more formal language ("Hello, could you please send me the report at your earliest convenience?"). In this way, the agent ensures communications are courteous and suitable for the workplace or external partners. |
| **Multilingual campaign localization** | Translating and adapting marketing or campaign content for multiple languages. A marketing team, for instance, could use the agent to take an English campaign slogan or announcement and localize it for different regions. The Text Translator translates the text and adjusts idioms or cultural references, ensuring that the message "Join us for the grand opening!" resonates appropriately with each target audience. Such translations accelerate the localization process and help maintain brand consistency across languages. |
| **Grammar correction and feedback** | Polishing written content by catching errors and providing explanations. For example, if a user writes a sentence like "I am agree with you," the agent not only corrects it to "I agree with you," but also explains the grammatical issue (such as explaining that in English, the verb "agree" doesn’t take "am"). This use case is valuable for non-native speakers writing reports, students doing assignments, or anyone who wants to ensure their text is grammatically sound and learn from their mistakes. |
| **Synonym suggestions for clarity** | Improving a document’s readability by avoiding repetition and choosing the most precise words. For instance, if a report or presentation overuses a word like "important," a user can ask the agent for alternatives. The Text Translator might suggest words like "essential," "critical," or "significant," each with a note on context (perhaps indicating that "critical" might imply urgency or high risk). This helps writers vary their language and select words that best convey their intended meaning. |
| **Language games for learning** | Making language practice fun and relevant. A user could take a simple sentence ("The cat is on the mat.") and ask the agent to turn it into a learning game. The agent might create a fill-in-the-blank exercise ("The ___ is on the ___.") or ask a question ("What is on the mat?") to prompt the user to respond in the target language. This scenario is great for language learners who want to practice in a low-stakes setting, or for team-building activities in a multilingual team where colleagues challenge each other to mini language quizzes. |
| **Document analysis for style and syntax** | Offering a comprehensive review of a longer document’s language quality. In this scenario, a user can attach or paste a portion of a document (such as an executive summary or a draft blog post) and have the agent provide feedback on grammar, syntax, and style. The Text Translator goes through the text and highlights things like run-on sentences, inconsistent tone, or complex jargon, giving suggestions to improve clarity and flow. This functions like an advanced proof-reader, ensuring that important documents are polished and reader-friendly. |

## Extension opportunities

You can extend the Text Translator agent’s functionality by connecting it to more resources or services. These enhancements can provide the agent with more context, adhere to specific organizational guidelines, or introduce new interactive features:

- **Connect to voice and tone guidelines (SharePoint or internal docs):** To ensure the agent’s translations and rewrites align with your company’s preferred style, you can provide it with access to corporate communication guidelines. For example, uploading a SharePoint document containing your organization’s voice and tone standards allow the agent to reference and apply those standards. This means when it translates or adjusts text, it automatically enforces the formality level, terminology, or phrasing that matches your brand.
- **Integrate internal wikis, FAQs, and documentation:** If your company has internal glossaries or knowledge bases (for example, a wiki of common technical terms or an FAQ with standard responses in multiple languages), connecting these glossaries as knowledge sources improves the agent’s accuracy. The agent can then use the exact terms or phrasing your organization prefers (say, the proper translation of a product name, or the approved wording of a disclaimer) rather than generic translations. This ensures consistency in communications, especially for specialized industries or company-specific terminology.

## Limitations

Keep the following considerations and limitations in mind when using the Text Translator template:

- **One question/operation at a time:** Agents built from this template are optimized for handling one query or task per prompt. Users should avoid stringing multiple requests together (for example "Translate this paragraph and also check if the tone is formal and then list some synonyms for key words"). Instead, tackle one function at a time. This makes it easier for the agent to provide a clear, accurate result. If you have a series of tasks, you can run them one after the other (for example, first ask for a translation, then in a new prompt ask for a tone check on that translation).
- **Handling of sensitive or confidential text:** Remember that an AI processes the content you provide to it when it translates or analyzes text. While Copilot’s environment is designed with enterprise-grade security, it’s still your responsibility to follow your organization’s policies on sensitive data. Avoid inputting highly confidential or personal information unless you're sure it’s allowed. For example, translating a draft press release is fine. However, you might not want to input raw legal contracts or private personal data unless proper approvals are in place. Always double-check that using the agent aligns with your company’s data handling guidelines.
- **Potential for errors or inappropriate suggestions:** Although the Text Translator agent is built to provide correct translations and helpful advice, it relies on AI and could occasionally produce incorrect or nonsensical output. It might misunderstand context, especially with ambiguous language, or provide a translation that is literally correct but not the best phrasing. The agent is tuned to avoid harmful or offensive content, but users should still be cautious. A standard disclaimer is included in agents of this type, reminding users to verify the results. It’s wise to **review the agent’s output** before using it, particularly for official or customer-facing communications. If something looks off (for example, a phrase that doesn’t feel right in the target language), use human judgment or consult a fluent speaker.
- **Compliance with local regulations:** If the agent is used in regulated contexts (like translating public health guidance, legal notices, or anything subject to local laws on language equality), ensure that the final output meets all legal requirements. The agent itself won’t know, for example, the legal phrasing required in a contract or the exact terminology mandated by law for product labeling. Similarly, if you operate in regions with language laws (such as requirements to provide materials in certain languages), the agent can help generate those translations, but you must verify they adhere to the formal standards. Always have a compliance or legal review for any content where a mistake could have regulatory consequences. In summary, treat the agent’s translations and suggestions as drafts or learning aids—useful, but still in need of human oversight for important matters.

## Related content

- [Overview of Copilot Studio in Microsoft 365 Copilot](copilot-studio-lite.md)
- [Build agents with Copilot Studio](copilot-studio-lite-build.md)
- [Publish and manage agents](copilot-studio-lite-share-manage-agent.md)