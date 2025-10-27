import { useState } from "react";

const defaultCode = `flowchart TD
    %% Root
    Root[cb-data-dashboard/] --> Config[Config Files<br>.eslintrc.json, next.config.js, tsconfig.json]
    Root --> Public[public/]
    Root --> Src[src/]

    %% Src Breakdown
    Src --> Middleware[middleware.ts]
    Src --> Components[components/]
    Src --> Helper[helper/]
    Src --> Pages[pages/]
    Src --> Theme[theme/]

    %% Theme
    Theme --> Dark[darkTheme.ts]
    Theme --> Light[lightTheme.ts]

    %% Helper
    Helper --> Util[Util.ts]

    %% Components
    Components --> Mock[mockData.ts]
    Components --> DashboardComp[Dashboard/]
    Components --> DataChart[DataChart/]
    Components --> FooterComp[Footer/]
    Components --> HeaderComp[Header/]
    Components --> LayoutComp[Layout/]
    Components --> LoginComp[Login/]
    Components --> SideMenuComp[SideMenu/]
    Components --> ThemeToggle[ThemeToggleButton/]

    %% Dashboard Subcomponents
    DashboardComp --> DataCard[DataCard/]
    DashboardComp --> DataRibbon[DataRibbon/]
    DashboardComp --> TransBottom[TransactionBottomRow/]
    DashboardComp --> TransPerDay[TransactionsPerDay/]

    DataChart --> Themes[Themes.ts]

    %% Pages
    Pages --> App[_app.tsx]
    Pages --> Doc[_document.tsx]
    Pages --> Home[index.tsx]
    Pages --> API[api/]
    Pages --> Auth[auth/]
    Pages --> DashPage[dashboard/]

    %% API Routes
    API --> Hello[hello.ts]
    API --> NextAuth["[...nextauth].ts"]

    %% Auth Pages (NextAuth)
    Auth --> Error[error/Error.tsx]
    Auth --> NewUser[new-user/NewUser.tsx]
    Auth --> SignIn[signin/SignIn.tsx]
    Auth --> SignOut[signout/signout.tsx]
    Auth --> Verify[verify-request/VerifyRequest.tsx]

    %% Dashboard Pages
    DashPage --> DashHome[Dashboard.tsx]
    DashPage --> DataPage[data/Data.tsx]
    DashPage --> ProfilePage[profile/Profile.tsx]
    DashPage --> SettingsPage[settings/Settings.tsx]

    %% Layout & Global Components
    App -->|wraps all pages| LayoutComp
    LayoutComp --> HeaderComp
    LayoutComp --> SideMenuComp
    LayoutComp --> Outlet[Page Content]

    DashHome --> DashboardComp
    DashHome --> DataChart
    DashHome --> TransPerDay
    DashHome --> DataRibbon
    DashHome --> DataCard
    DashHome --> TransBottom

    %% Auth Flow
    NextAuth -->|handles| SignIn
    NextAuth -->|handles| SignOut
    NextAuth -->|handles| Error
    NextAuth -->|handles| Verify
    NextAuth -->|handles| NewUser

    %% Theme Toggle
    HeaderComp --> ThemeToggle
    ThemeToggle -->|switches| Dark
    ThemeToggle -->|switches| Light

    %% Styling
    style Components fill:#3498db, color:#fff
    style Pages fill:#27ae60, color:#fff
    style Theme fill:#9b59b6, color:#fff
    style API fill:#e67e22, color:#fff
    style Auth fill:#e74c3c, color:#fff
    style DashboardComp fill:#f39c12, color:#fff
    style LayoutComp fill:#16a085, color:#fff
    style NextAuth fill:#c0392b, color:#fff

    classDef page fill:#2ecc71, color:#fff, stroke:#27ae60
    classDef comp fill:#3498db, color:#fff, stroke:#2980b9
    classDef auth fill:#e74c3c, color:#fff, stroke:#c0392b
    classDef api fill:#f39c12, color:#fff, stroke:#e67e22
    classDef layout fill:#1abc9c, color:#fff, stroke:#16a085
    classDef theme fill:#9b59b6, color:#fff, stroke:#8e44ad

    class App,Doc,Home,DashHome,DataPage,ProfilePage,SettingsPage page
    class HeaderComp,SideMenuComp,FooterComp,LoginComp,ThemeToggle,DataChart,DataCard,DataRibbon,TransPerDay,TransBottom,LayoutComp,Middleware comp
    class SignIn,SignOut,Error,NewUser,Verify auth
    class Hello,NextAuth api
    class LayoutComp layout
    class Dark,Light theme`;

interface Props {
    onRender2D: (code: string) => void;
}

export default function Editor({ onRender2D }: Props) {
    const [code, setCode] = useState(defaultCode);

    return (
        <div>
            <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                placeholder="Type Mermaid code here..."
            />
            <button onClick={() => onRender2D(code)}>Render Diagram</button>
        </div>
    );
}
