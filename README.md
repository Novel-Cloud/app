소설, 일러스트를 올리고 공유하는 웹서비스 입니다.
직접 소설을 써보고 불편한 부분을 개선한 소설가 전용 에디터 기능도 지원해요.

![1681150953](https://user-images.githubusercontent.com/80014454/231018866-79440dbf-8d3d-4e8e-8a86-cb65dd9d5d83.png)

타입스크립트 기반 Next.js로 개발했고
Module Oriented Architecture 구조를 사용했어요.
완성 후 테스트 빡세게 짤 예정이예요

```
📦 app
├─ .babelrc
├─ .editorconfig
├─ .eslintignore
├─ .eslintrc.js
├─ .eslintrc.json
├─ .github
│  ├─ CODEOWNERS
│  ├─ ISSUE_TEMPLATE
│  │  ├─ bug.yml
│  │  └─ todo.yml
│  ├─ PULL_REQUEST_TEMPLATE.md
│  └─ workflows
│     └─ lint.yaml
├─ .gitignore
├─ .prettierignore
├─ .prettierrc.js
├─ README.md
├─ apis
│  ├─ httpClient.ts
│  └─ index.ts
├─ components
│  ├─ app
│  │  ├─ ButtonList.style.ts
│  │  ├─ ButtonList.tsx
│  │  └─ TagTitle.tsx
│  ├─ artwork
│  │  ├─ ArtworkCommentList.style.ts
│  │  ├─ ArtworkCommentList.tsx
│  │  ├─ ArtworkDetail.style.ts
│  │  ├─ ArtworkDetail.tsx
│  │  ├─ ArtworkPlayer.style.ts
│  │  ├─ ArtworkPlayer.tsx
│  │  └─ Comment.tsx
│  ├─ atoms
│  │  ├─ Artwork.style.ts
│  │  ├─ Artwork.tsx
│  │  ├─ ArtworkList.tsx
│  │  ├─ Avatar.style.ts
│  │  ├─ Avatar.tsx
│  │  ├─ Button.style.ts
│  │  ├─ Button.tsx
│  │  ├─ CheckBoxText.tsx
│  │  ├─ FileUploader.style.ts
│  │  ├─ FileUploader.tsx
│  │  ├─ FrameButton.style.ts
│  │  ├─ FrameButton.tsx
│  │  ├─ Input.style.ts
│  │  ├─ Input.tsx
│  │  ├─ Loading.tsx
│  │  ├─ Radio.style.ts
│  │  ├─ Radio.tsx
│  │  ├─ Tag.tsx
│  │  ├─ TagList.style.ts
│  │  ├─ TagList.tsx
│  │  ├─ TextArea.style.ts
│  │  └─ TextArea.tsx
│  ├─ common
│  │  ├─ Frame
│  │  │  ├─ index.style.ts
│  │  │  └─ index.tsx
│  │  ├─ Header
│  │  │  ├─ LoginedUser.style.ts
│  │  │  ├─ LoginedUser.tsx
│  │  │  ├─ Logo.style.ts
│  │  │  ├─ Logo.tsx
│  │  │  ├─ SearchBar.style.ts
│  │  │  ├─ SearchBar.tsx
│  │  │  ├─ index.style.ts
│  │  │  └─ index.tsx
│  │  └─ Modal
│  │     ├─ View.tsx
│  │     └─ index.tsx
│  ├─ editor
│  │  ├─ EditButton.tsx
│  │  ├─ Editor.style.ts
│  │  ├─ Editor.tsx
│  │  ├─ ShortCutButton.tsx
│  │  ├─ Toolbar.style.ts
│  │  ├─ Toolbar.tsx
│  │  ├─ ToolbarButton.style.ts
│  │  ├─ ToolbarButton.tsx
│  │  └─ edit
│  │     ├─ CreateShortCutView.tsx
│  │     ├─ DragDropView.tsx
│  │     └─ EditorEditApp.tsx
│  ├─ icons
│  │  ├─ artwork
│  │  │  ├─ EyeIcon.tsx
│  │  │  ├─ FilledLikeIcon.tsx
│  │  │  ├─ LikeIcon.tsx
│  │  │  ├─ PencilIcon.tsx
│  │  │  ├─ ShareIcon.tsx
│  │  │  └─ TrashCanIcon.tsx
│  │  ├─ common
│  │  │  ├─ FilterIcon.tsx
│  │  │  └─ XIcon.tsx
│  │  └─ editor
│  │     ├─ AlignCenterIcon.tsx
│  │     ├─ AlignLeftIcon.tsx
│  │     ├─ AlignRightIcon.tsx
│  │     ├─ BoldIcon.tsx
│  │     ├─ GoogleIcon.tsx
│  │     ├─ H1Icon.tsx
│  │     ├─ H2Icon.tsx
│  │     ├─ H3Icon.tsx
│  │     ├─ H4Icon.tsx
│  │     ├─ H5Icon.tsx
│  │     ├─ H6Icon.tsx
│  │     ├─ HrIcon.tsx
│  │     ├─ ImageIcon.tsx
│  │     ├─ ItalicIcon.tsx
│  │     ├─ OrderedListIcon.tsx
│  │     ├─ ParagraphIcon.tsx
│  │     ├─ SearchIcon.tsx
│  │     ├─ ShortCutIcon.tsx
│  │     └─ UnOrderedListIcon.tsx
│  ├─ login
│  │  ├─ LoginButton.style.ts
│  │  ├─ LoginButton.tsx
│  │  ├─ index.style.ts
│  │  └─ index.tsx
│  ├─ pdf
│  │  └─ PdfService.tsx
│  ├─ profile
│  │  ├─ ProfileBackground.style.ts
│  │  ├─ ProfileBackground.tsx
│  │  ├─ ProfileInfo.style.ts
│  │  ├─ ProfileInfo.tsx
│  │  └─ edit
│  │     └─ ProfileEdit.tsx
│  ├─ search
│  │  ├─ Filter.tsx
│  │  ├─ SearchResult.style.ts
│  │  ├─ SearchResult.tsx
│  │  └─ TagListView.tsx
│  └─ upload
│     ├─ ArtworkForm.tsx
│     ├─ ArtworkTypeRadio.tsx
│     ├─ index.style.ts
│     └─ index.tsx
├─ config
│  └─ index.ts
├─ context
│  ├─ index.ts
│  └─ modal.tsx
├─ e2e
│  └─ index.spec.ts
├─ fixture
│  ├─ index.ts
│  └─ property.tsx
├─ hooks
│  ├─ useAuthUser.ts
│  ├─ useDebounce.ts
│  ├─ useFileDrop.ts
│  └─ useModal.ts
├─ jest.config.js
├─ key
│  ├─ editor.index.ts
│  └─ index.ts
├─ layout
│  ├─ ArtworkDetailLayout.style.ts
│  ├─ ArtworkDetailLayout.tsx
│  ├─ EditorEditLayout.tsx
│  ├─ EditorLayout.style.ts
│  ├─ EditorLayout.tsx
│  ├─ LoginLayout.style.ts
│  ├─ LoginLayout.tsx
│  ├─ MainLayout.style.ts
│  ├─ MainLayout.tsx
│  ├─ ProfileEditLayout.tsx
│  ├─ ProfileLayout.style.ts
│  ├─ ProfileLayout.tsx
│  ├─ SearchLayout.style.ts
│  ├─ SearchLayout.tsx
│  ├─ UploadLayout.style.ts
│  └─ UploadLayout.tsx
├─ model
│  ├─ artwork
│  │  └─ index.ts
│  ├─ editor
│  │  └─ index.ts
│  ├─ oauth
│  │  └─ index.ts
│  └─ user
│     └─ index.ts
├─ next.config.js
├─ package.json
├─ pages
│  ├─ 404.tsx
│  ├─ _app.tsx
│  ├─ _document.tsx
│  ├─ artwork
│  │  └─ [artworkId].tsx
│  ├─ editor
│  │  ├─ edit.tsx
│  │  └─ index.tsx
│  ├─ index.tsx
│  ├─ login
│  │  └─ index.tsx
│  ├─ oauth
│  │  └─ callback
│  │     └─ google.tsx
│  ├─ profile
│  │  ├─ [userId].tsx
│  │  └─ edit.tsx
│  ├─ search
│  │  └─ index.tsx
│  └─ upload
│     └─ index.tsx
├─ playwright.config.ts
├─ public
│  ├─ assets
│  │  ├─ AyaChan.png
│  │  ├─ HeaderLogo.png
│  │  ├─ LibraryGirl.png
│  │  ├─ LoginGirl.png
│  │  ├─ LogoGirl.png
│  │  ├─ NoImageGirl.png
│  │  └─ font
│  │     └─ PretendardVariable.ttf
│  └─ favicon.ico
├─ storage
│  └─ index.ts
├─ styles
│  ├─ globalStyle.ts
│  ├─ theme.ts
│  └─ userStyle.ts
├─ tsconfig.json
├─ types
│  ├─ artwork.interface.ts
│  ├─ atoms.interface.ts
│  ├─ common.interface.ts
│  ├─ editor.interface.ts
│  ├─ modal.interface.ts
│  └─ user.interface.ts
├─ utils
│  ├─ api.ts
│  ├─ array.ts
│  ├─ date.ts
│  └─ file.ts
└─ yarn.lock
```