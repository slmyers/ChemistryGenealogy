SELECT
    _mentors.name, _mentors.id,
FROM
    (
          ( SELECT people.id AS _mentors.id, people.name AS _mentors.name
            FROM mentors
            LEFT OUTER JOIN mentors ON mentors.mentor_id = people.id
            WHERE mentors.person_id = 1
            AND approved = 't'
          )
        AS _mentors,
          ( SELECT people.id AS _mentored.id, people.name AS _mentored.name
            FROM people
            LEFT OUTER JOIN mentors ON mentors.person_id = people.id
            WHERE mentors.mentor_id = 1
            AND approved = 't'
          )
        AS _mentored,
          ( SELECT people.id AS _supervisors.id, people.name AS _supervisors.name
            FROM people
            LEFT OUTER JOIN supervisors ON supervisors.supervisor_id = people.id
            WHERE supervisors.person_id = 1
            AND approved = 't'
          )
        AS _supervisors,
          (
            SELECT people.id AS _supervised.id, people.name AS _supervised.name
            FROM people
            LEFT OUTER JOIN supervisors ON supervisors.person_id = people.id
            WHERE supervisors.supervisor_id = 1
            AND approved = 't'
          )
        AS _supervised
    ) AS results
