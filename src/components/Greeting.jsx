import { useTranslations } from 'next-intl'

export default function Greeting () {
const t = useTranslations('Greeting')
    return (
    <section>
        <p>{t('message')}</p>
    </section>
 )
}