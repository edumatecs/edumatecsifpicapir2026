import { activities } from '../../data/activities'
import {
  registrationMinicourses,
  registrationWorkshopGroups,
} from '../../data/registration-options'

interface RegistrationActivitiesProps {
  getActivityById: (id: string) => (typeof activities)[number]
}

function RegistrationActivities({
  getActivityById,
}: RegistrationActivitiesProps) {
  return (
    <div className="registration-activities">
      <h2>
        Escolha de Oficinas e Minicurso (10 de Dezembro)
      </h2>

      {registrationWorkshopGroups.map(
        (group, groupIndex) => (
          <div
            key={group.id}
            className="registration-activity-block"
          >
            <h3>
              {group.title}
            </h3>

            {group.activities.map((activityId) => {
              const activity =
                getActivityById(activityId)

              return (
                <label
                  key={activity.id}
                  className="registration-activity-card"
                >
                  <input
                    type="radio"
                    name={`oficina${groupIndex + 1}`}
                    value={activity.id}
                    required
                  />

                  <div className="registration-activity-info">
                    <strong>
                      {activity.title}
                    </strong>

                    <p>
                      Ministrantes:{' '}
                      {activity.participants
                        .map(
                          (participant) =>
                            participant.person.name,
                        )
                        .join(' e ')}
                    </p>
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
          const activity =
            getActivityById(activityId)

          return (
            <label
              key={activity.id}
              className="registration-activity-card"
            >
              <input
                type="radio"
                name="minicurso"
                value={activity.id}
                required
              />

              <div className="registration-activity-info">
                <strong>
                  {activity.title}
                </strong>

                <p>
                  Ministrantes:{' '}
                  {activity.participants
                    .map(
                      (participant) =>
                        participant.person.name,
                    )
                    .join(' e ')}
                </p>
              </div>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default RegistrationActivities