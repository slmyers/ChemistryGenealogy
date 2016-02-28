SELECT
    mentor.name, mentor.id,
    mentee.name, mentee.id,
    supervisor.name, supervisor.id,
    supervised.name, supervised.id
FROM
    ( SELECT
          ( SELECT p.name, p.id
            FROM people AS p, mentors AS m
            WHERE approved = 't'
            AND m.person_id = p.id
            AND p.id = 1
          )
        AS mentor,
          ( SELECT p.name, p.id
            FROM people AS p, mentors AS m
            WHERE approved = 't'
            AND m.mentor_id = 1
            AND m.person_id = p.id
          )
        AS mentee,
          ( SELECT p.name, p.id
            FROM people AS p, supervisors AS s
            WHERE approved = 't'
            AND s.person_id = p.id
            AND p.id = 1
          )
        AS supervisor,
          ()
