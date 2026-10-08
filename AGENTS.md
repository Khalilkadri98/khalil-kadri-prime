<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep the portfolio as a single scrolling index route with anchor sections because the requested navigation explicitly uses smooth anchors.
- Store bilingual copy in a shared typed content module and render reusable portfolio and project components so German and English remain consistent.
- Keep verified CV PDFs in public/documents and choose the download by the selected language so downloads remain self-contained.
- Label designed project interfaces as concepts and illustrative data as samples so visuals cannot imply verified screenshots or project results.
- Render the hero portrait through a dedicated optional-image component with a fixed aspect ratio and object-fit cropping so adding a real asset preserves layout and avoids distortion.
