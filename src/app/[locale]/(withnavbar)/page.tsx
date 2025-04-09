import { useTranslations } from "next-intl"


const Page = () => {
    const t = useTranslations('HomePage')
    return (
        <div>
            {t('title')}
        </div>
    )
}

export default Page