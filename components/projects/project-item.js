import Image from "next/legacy/image";

export default function ProjectItem({ data }) {
    
    const title = data.properties.Name.title[0].plain_text
    const youtube = data.properties.Youtube.url
    const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url

    // 클릭 이벤트 핸들러 함수
    const handleClick = () => {
        window.location.href = youtube; // 유튜브 URL로 이동
    };

    return (
        <div className="project-card" onClick={handleClick} style={{ cursor: 'pointer' }}> {/* 클릭 이벤트 핸들러 추가 및 커서 속성 설정 */}
            <Image
                className="rounded-t-xl"
                src={imgSrc}
                alt="cover image"
                width="80%"
                height="60%"
                layout="responsive"
                objectFit="contain"
                quality={100}
            />

            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                <h3 className="mt-4 text-mid text-gray-800">{description}</h3>
            </div>
        </div>
    );
}
