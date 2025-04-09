import { useTranslations } from "next-intl"


const page = () => {
    const t = useTranslations('HomePage')
    return (
        <div>
            {t('title')}
        </div>
    )
}

export default page