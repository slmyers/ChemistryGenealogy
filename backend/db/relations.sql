SELECT x.*
FROM (
  SELECT _mentored.id, _mentors.id
  FROM
    (
      SELECT mentors.person_id AS id
      FROM mentors
      WHERE mentors.mentor_id = 1
    ) AS _mentored,
    (
      SELECT mentors.mentor_id AS id
      FROM mentors
      WHERE mentors.person_id = 1
    ) AS _mentors
) AS x;
