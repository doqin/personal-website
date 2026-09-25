import type { ImgHTMLAttributes } from "react";

type IconProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & { size?: number };

function makeIcon(src: string) {
    return function Icon({ size = 16, style, ...props }: IconProps) {
        return (
            <img
                src={src}
                alt=""
                draggable={false}
                width={size}
                height={size}
                style={{ objectFit: "contain", ...style }}
                {...props}
            />
        );
    };
}

export const NotepadIcon = makeIcon("/icons/home-notepad.png");
export const BlogIcon = makeIcon("/icons/blog-typewriter.png");
export const StickyNoteIcon = makeIcon("/icons/notes-sticky.png");
export const FolderIcon = makeIcon("/icons/projects-folder.png");
export const WarningIcon = makeIcon("/icons/warning.png");
export const FileQuestionIcon = makeIcon("/icons/question.png");
export const RepoIcon = makeIcon("/icons/repo-code.png");
export const MailIcon = makeIcon("/icons/mail.png");
export const GlobeIcon = makeIcon("/icons/globe.png");
export const BalloonIcon = makeIcon("/icons/balloon.png");
