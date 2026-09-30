# TOC reorganization notes

Running notes and follow-ups from the table of contents (`docs/TOC.yml`) lifecycle reorganization.

## Follow-ups

- **Choose how to build — tool selection by plugin type and skill level:** The current tool-selection pages (`declarative-agent-tool-comparison.md`, `copilot-studio-experience.md`) compare tools by agent development approach. There's likely a future content gap for guidance that helps a reader choose a tool based on the **plugin type** they've chosen (agents, skills, Copilot connectors, MCP servers) and their **skill level**. Consider adding a new article/stub for this.

## Build and reuse — decisions

Reorganized by **plugin type**, then by **tool** (`Build with <tool>`):

- **Agents:** Build with Agent Builder, Build with Copilot Studio, Build with Agents Toolkit, plus **Enhance agents** (former "Enhance declarative agents").
- **Skills:** Build with Agent Builder (`agent-builder-add-skills.md`), Build with Agents Toolkit (`build-declarative-agents-add-custom-skills.md`).
- **Copilot connectors:** connector overview/admin/gallery/people-data/Connectors API, with Build with Agents Toolkit and Build with SDK.
- **MCP servers:** Build with Agents Toolkit (former "Add actions with MCP plugins" subtree).
- **API plugins:** Build with Agents Toolkit (former "Add actions with API plugins" subtree). Treated as an assumed-eligible plugin type.
- **Custom engine agents:** renamed tool nodes to "Build with Teams SDK" / "Build with Copilot Studio". Treated as an assumed-eligible plugin type.

Moved to **Miscellaneous** (didn't map to a plugin type / tool):

- `overview-plugins.md` (former "Add actions with plugins > Overview"), listed as **Plugins overview**. May be superseded by the Understand-and-plan plugin-type pages — decide final home later.
- **Extend agents at scale with Agent 365** (cross-cutting, not a single plugin type).

Open questions to confirm later:

- Whether **Skills** needs dedicated "build a standalone skill" content (current pages only cover adding skills to an agent).
- Whether API plugins / custom engine agents remain their own plugin-type nodes if eligibility changes.
