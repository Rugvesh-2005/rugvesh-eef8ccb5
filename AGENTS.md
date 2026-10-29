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

## Rules

- Media displayed by the app must be vendored as real binary files under `src/assets/` and imported directly (e.g. `import portrait from "@/assets/rugvesh-portrait.jpg"`), never referenced through Lovable asset pointer `.asset.json` URLs — those `/__l5e/...` paths are served only by Lovable's infrastructure and 404 on external hosts like Vercel or GitHub Pages, where the user self-hosts this portfolio.
