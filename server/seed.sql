-- INSERT INTO project (id, created_at, name) VALUES ('b7823232-81a9-4cd8-a3fc-63dda206d63f', '2023-01-01', 'Awesome Project');

-- do $$
-- begin
--   for counter in 1..100 loop
-- 	  INSERT INTO post (created_at, project_id, title, comment) VALUES (date '2023-01-01' + counter, 'b7823232-81a9-4cd8-a3fc-63dda206d63f', 'Post Title ' || counter, 'Post Comment ' || counter);
--   end loop;
-- end; $$;

INSERT INTO project (id, created_at, name) VALUES ('b7823232-81a9-4cd8-a3fc-63dda206d63f', '2023-01-01', 'Awesome Project');

ALTER TABLE post ADD COLUMN img text;

do $$
declare
  lorem_ipsum text[] := array[
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Senectus et netus et malesuada fames ac. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Est placerat in egestas erat imperdiet sed. Urna et pharetra pharetra massa massa. Quam elementum pulvinar etiam non quam lacus suspendisse. Placerat duis ultricies lacus sed turpis tincidunt id. Arcu felis bibendum ut tristique. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus.',
    'Proin non diam et mi bibendum porttitor. Lacus sed turpis tincidunt id aliquet risus feugiat in. Ac orci phasellus egestas tellus rutrum. Eget felis eget nunc lobortis. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit.',
    'Sed malesuada turpis at quam fringilla, auctor placerat ipsum aliquet. A erat nam at lectus urna duis convallis convallis tellus. Id interdum velit laoreet id donec ultrices. Purus semper eget duis at tellus. Donec massa sapien faucibus et molestie ac. Felis donec et odio pellentesque diam volutpat commodo. Gravida dictum fusce ut placerat orci.',
    'Nullam volutpat tellus at libero pharetra, sed hendrerit felis malesuada. Tincidunt praesent semper feugiat nibh. Velit dignissim sodales ut eu sem. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Integer quis auctor elit sed vulputate mi sit. Diam donec adipiscing tristique risus nec feugiat in fermentum. Morbi leo urna molestie at. Magna ac placerat vestibulum lectus mauris ultrices eros. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Eu facilisis sed odio morbi quis commodo odio.'
  ];
begin
  for counter in 1..100 loop
	  INSERT INTO post (created_at, project_id, title, img, comment)
    VALUES (
      date '2023-01-01' + counter,
      'b7823232-81a9-4cd8-a3fc-63dda206d63f',
      'Post Title ' || counter,
	    'https://source.unsplash.com/random/?nature&orientation=landscape&' || counter,
      'Post Comment ' || counter || ' ' || lorem_ipsum[ceil((random() * array_upper(lorem_ipsum, 1)))::int]);
  end loop;
end; $$;