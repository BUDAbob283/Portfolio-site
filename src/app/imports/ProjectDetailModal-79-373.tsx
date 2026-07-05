import svgPaths from "./svg-110ezcloj1";

function ProjectTitle() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="ProjectTitle">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[48px] left-0 text-[48px] text-white top-[0.5px] tracking-[2.4px] uppercase">Historic Ten</p>
    </div>
  );
}

function ProjectClient() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="ProjectClient">
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[48px] left-0 text-[24px] text-white top-[0.5px] tracking-[2.4px]">Knack Volley Roeselare</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <ProjectTitle />
      <ProjectClient />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M6 1.5V4.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 1.5V4.5" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p13693a10} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M2.25 7.5H15.75" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          2025
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-[2px] w-[62.594px]" data-name="Container">
      <Icon />
      <Text />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_79_316)" id="Icon">
          <path d={svgPaths.p2b6c5300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1bf5c271} fill="var(--fill-0, #99A1AF)" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_79_316">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#99a1af] text-[14px] top-[4.5px] tracking-[0.35px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Cinematography
        </p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[28px] relative shrink-0 w-[116.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#99a1af] text-[14px] top-[4.5px] tracking-[0.35px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Documentary
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Text1 />
        <Text2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[28px] items-center left-[86.59px] top-0 w-[287.766px]" data-name="Container">
      <Icon1 />
      <Container2 />
    </div>
  );
}

function Tags() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Tags">
      <Container />
      <Container1 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header">
      <Title />
      <Tags />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d="M13 1L1 13" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d="M1 1L13 13" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProjectDetailModal1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex flex-col items-start pt-[8px] px-[8px] right-[20px] rounded-[16777200px] size-[40px] top-[21px]" data-name="ProjectDetailModal">
      <Icon2 />
    </div>
  );
}

function Intro() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Intro">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[29.25px] min-h-px min-w-px relative text-[#d1d5dc] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        This cinematic short film explores the intricate relationship between urban architecture and human emotion. Shot over three months in various metropolitan areas, the project captures the essence of modern city life through carefully composed frames and dynamic camera movements. The film uses natural lighting and ambient sounds to create an immersive experience that invites viewers to see their surroundings with fresh eyes.
      </p>
    </div>
  );
}

function Iframe() {
  return <div className="aspect-[1056/594] shrink-0 w-full" data-name="Iframe" />;
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[449px] relative w-full">
          <p className="font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[20px] relative shrink-0 text-[#99a1af] text-[14px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            Main cinematic short film
          </p>
        </div>
      </div>
    </div>
  );
}

function MediaBlockComponent() {
  return (
    <div className="aspect-[1056/622] content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="MediaBlockComponent">
      <Iframe />
      <Paragraph />
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Description">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[29.25px] min-h-px min-w-px relative text-[#d1d5dc] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        This cinematic short film explores the intricate relationship between urban architecture and human emotion. Shot over three months in various metropolitan areas, the project captures the essence of modern city life through carefully composed frames and dynamic camera movements. The film uses natural lighting and ambient sounds to create an immersive experience that invites viewers to see their surroundings with fresh eyes.
      </p>
    </div>
  );
}

function Media() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Media" />;
}

function MediaText() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0 w-full" data-name="Media-Text">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Media />
      </div>
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[29.25px] min-h-px min-w-px relative text-[#d1d5dc] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        This cinematic short film explores the intricate relationship between urban architecture and human emotion. Shot over three months in various metropolitan areas, the project captures the essence of modern city life through carefully composed frames and dynamic camera movements. The film uses natural lighting and ambient sounds to create an immersive experience that invites viewers to see their surroundings with fresh eyes.
      </p>
    </div>
  );
}

function Media1() {
  return <div className="h-[293px] shrink-0 w-full" data-name="Media" />;
}

function Media2() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Media" />;
}

function MediaText1() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0 w-full" data-name="Media-Text">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[29.25px] min-h-px min-w-px relative text-[#d1d5dc] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        This cinematic short film explores the intricate relationship between urban architecture and human emotion. Shot over three months in various metropolitan areas, the project captures the essence of modern city life through carefully composed frames and dynamic camera movements. The film uses natural lighting and ambient sounds to create an immersive experience that invites viewers to see their surroundings with fresh eyes.
      </p>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Media2 />
      </div>
    </div>
  );
}

function OptionalBlocks() {
  return (
    <div className="relative shrink-0 w-full" data-name="OptionalBlocks">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[25px] items-start p-[10px] relative w-full">
          <MediaText />
          <Media1 />
          <MediaText1 />
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetailModal() {
  return (
    <div className="bg-[#181818] content-stretch flex flex-col gap-[46px] items-start p-[40px] relative size-full" data-name="ProjectDetailModal">
      <Header />
      <ProjectDetailModal1 />
      <Intro />
      <MediaBlockComponent />
      <Description />
      <OptionalBlocks />
    </div>
  );
}