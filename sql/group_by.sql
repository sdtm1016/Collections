-- oracle pl/sql

-- insert data
declare
  j number := 1;
begin
  for i in 1 .. 100 loop
   
    --dbms_output.put_line(i);
  
    j := mod((100 - i), 3);
    dbms_output.put_line(j || ' - ' || i);
 
    insert into TEST_GROUP_BY (id, name, key) values (i, 'name' || i, j);
  end loop;
  commit;
end;

-- count query
select key, count(1) COUNT_KEY from TEST_GROUP_BY group by key;
