INSERT INTO project (id, created_at, name) VALUES ('b7823232-81a9-4cd8-a3fc-63dda206d63f', '2023-01-01', 'Awesome Project');

do $$
begin
  for counter in 1..100 loop
	  INSERT INTO post (created_at, project_id, title, comment) VALUES (date '2023-01-01' + counter, 'b7823232-81a9-4cd8-a3fc-63dda206d63f', 'Post Title ' || counter, 'Post Comment ' || counter);
  end loop;
end; $$;

