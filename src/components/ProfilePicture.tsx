import styles from "../styles/ProfilePicture.module.css";

function ProfilePicture(
    { width = '1em', height = '1em' }: { width?: string | number, height?: string | number }
) {
    return (
        <a href='https://github.com/doqin' className={styles.imageHolder}>
            <img alt='profile picture' style={{ borderRadius: "50%", width: width, height: height }} src='https://avatars.githubusercontent.com/u/175150133'/>
        </a>
    )
}

export default ProfilePicture;