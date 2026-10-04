import { activities } from '../../data/activities'
import { schedule } from '../../data/schedule'
import type { Activity } from '../../domain/activity'
import './Programacao.css'

function findActivity(id: string): Activity | undefined {
  return activities.find((activity) => activity.id === id)
}

function getActivityTypeLabel(activity: Activity): string {
  switch (activity.type) {
    case 'palestra':
      return 'Palestra'

    case 'minicurso':
      return 'Minicurso'

    case 'oficina':
      return 'Oficina'

    case 'roda-de-conversa':
      return 'Roda de Conversa'
  }
}

function Programacao() {
  return (
    <main>
      <section className="programacao">
        <h2>Programação Geral (09 a 11 de Dezembro de 2026)</h2>

        {schedule.map((day) => (
          <div className="cronograma-dia" key={day.date}>
            <h3>{day.label}</h3>

            {day.items.map((item) => (
              <div className="item-agenda" key={item.id}>
                <span className="hora">{item.time}</span>

                <span className="descricao">
                  {item.title && <strong>{item.title}</strong>}

                  {item.description && (
                    <>
                      <br />
                      {item.description}
                    </>
                  )}

                  {item.activities?.map((scheduleActivity) => {
                    const activity = findActivity(scheduleActivity.activityId)

                    if (!activity) {
                      return null
                    }

                    return (
                      <span className="atividade-agenda" key={activity.id}>
                        <br />

                        <strong>
                          {getActivityTypeLabel(activity)}
                          {scheduleActivity.label
                            ? ` ${scheduleActivity.label}`
                            : ''}
                          :
                        </strong>{' '}

                        {activity.title}
                        <br />

                        {activity.description && (
                          <>
                            {activity.description}
                            <br />
                          </>
                        )}

                        {activity.participants.map((participant) => (
                          <span key={participant.person.id}>
                            <strong>{participant.role}:</strong>{' '}
                            {participant.person.academicTitle &&
                              `${participant.person.academicTitle} `}
                            {participant.person.name}
                            <br />
                          </span>
                        ))}
                      </span>
                    )
                  })}
                </span>
              </div>
            ))}
          </div>
        ))}
      </section>
    </main>
  )
}

export default Programacao