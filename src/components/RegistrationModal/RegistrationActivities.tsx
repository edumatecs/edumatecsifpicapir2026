import { activities } from '../../data/activities'
import {
    registrationMinicourses,
    registrationWorkshopGroups,
} from '../../data/registration-options'
import type { ActivityAvailability } from '../../services/registrationService'

interface RegistrationActivitiesProps {
    getActivityById: (id: string) => (typeof activities)[number]
    availability: Record<string, ActivityAvailability> | null
    isLoadingAvailability: boolean
    availabilityError: string
}

const activityLabels: Record<string, string> = {
    'oficina-tangram-sala-de-aula': 'Oficina 1',
    'oficina-hp12c-celular': 'Oficina 2',
    'oficina-matematica-direitos-humanos': 'Oficina 3',
    'oficina-geometria-calculo-design': 'Oficina 4',
    'oficina-latex-gpt': 'Oficina 5',
    'oficina-harness-yourself': 'Oficina 6',
    'oficina-matematica-alem-dos-numeros': 'Oficina 7',
    'oficina-alfabetizacao-matematica': 'Oficina 8',
    'oficina-pesquisa-conhecimento-cientifico': 'Oficina 9',

    'minicurso-ray-victor': 'Minicurso 1',
    'minicurso-clayton-robson': 'Minicurso 2',
    'minicurso-francisco-chagas': 'Minicurso 3',
    'minicurso-pablo-dias': 'Minicurso 4',
}

function RegistrationActivities({
    getActivityById,
    availability,
    isLoadingAvailability,
    availabilityError,
}: RegistrationActivitiesProps) {
    const renderAvailability = (activityId: string) => {
        const label = activityLabels[activityId]
        const places = availability?.[label]

        if (isLoadingAvailability) {
            return (
                <span className="registration-availability">
                    Consultando vagas...
                </span>
            )
        }

        if (!places) {
            return null
        }

        return (
            <span
                className={`registration-availability ${
                    places.esgotada ? 'is-full' : ''
                }`}
            >
                {places.esgotada
                    ? 'Vagas esgotadas'
                    : `${places.disponiveis} vagas disponíveis`}
            </span>
        )
    }

    const isActivityFull = (activityId: string) => {
        const label = activityLabels[activityId]
        return availability?.[label]?.esgotada ?? false
    }

    return (
        <div className="registration-activities">
            <h2>
                Escolha de Oficinas e Minicurso (10 de Dezembro)
            </h2>

            {availabilityError && (
                <div
                    className="registration-availability-warning"
                    role="status"
                >
                    Não foi possível consultar as vagas neste momento.
                    As escolhas serão verificadas novamente no envio da inscrição.
                </div>
            )}

            {registrationWorkshopGroups.map(
                (group, groupIndex) => (
                    <div
                        key={group.id}
                        className="registration-activity-block"
                    >
                        <h3>{group.title}</h3>

                        {group.activities.map((activityId) => {
                            const activity = getActivityById(activityId)
                            const isFull = isActivityFull(activityId)

                            return (
                                <label
                                    key={activity.id}
                                    className={`registration-activity-card ${
                                        isFull ? 'is-full' : ''
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name={`oficina${groupIndex + 1}`}
                                        value={activity.id}
                                        disabled={isFull}
                                    />

                                    <div className="registration-activity-info">
                                        <strong>{activity.title}</strong>

                                        <p>
                                            Ministrantes:{' '}
                                            {activity.participants
                                                .map(
                                                    (participant) =>
                                                        participant.person.name,
                                                )
                                                .join(' e ')}
                                        </p>

                                        {renderAvailability(activityId)}
                                    </div>
                                </label>
                            )
                        })}
                    </div>
                ),
            )}

            <div className="registration-activity-block">
                <h3>
                    Quinta-feira (20h às 22h) - Escolha 1 Minicurso
                </h3>

                {registrationMinicourses.map((activityId) => {
                    const activity = getActivityById(activityId)
                    const isFull = isActivityFull(activityId)

                    return (
                        <label
                            key={activity.id}
                            className={`registration-activity-card ${
                                isFull ? 'is-full' : ''
                            }`}
                        >
                            <input
                                type="radio"
                                name="minicurso"
                                value={activity.id}
                                disabled={isFull}
                            />

                            <div className="registration-activity-info">
                                <strong>{activity.title}</strong>

                                <p>
                                    Ministrantes:{' '}
                                    {activity.participants
                                        .map(
                                            (participant) =>
                                                participant.person.name,
                                        )
                                        .join(' e ')}
                                </p>

                                {renderAvailability(activityId)}
                            </div>
                        </label>
                    )
                })}
            </div>
        </div>
    )
}

export default RegistrationActivities
