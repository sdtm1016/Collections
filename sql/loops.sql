-- oracle pl/sql

-- 乘法口诀
declare                   -- 定义语句
  a number := 0;           -- 数据初始化
  --b number := 0;
begin 
  for b in 1 .. 9 loop         -- while loop 循环
    --b := b + 1;            -- 自增
    for a in 1 .. b loop
        --a := a + 1;        -- dbms_out.put 将要输出的内容放入缓冲区，to_chan 格式化字符串、日期
        dbms_output.put(a || ' * ' || b || ' = ' || to_char(a * b, '00') || '    ');
    end loop;              -- 结束最近的一次循环
    dbms_output.new_line;  -- 输出缓冲区的内容
    a := 0;
  end loop;
end;

declare                   -- 定义语句
  a number := 0;           -- 数据初始化
  b number := 0;
begin 
  while b < 9 loop         -- while loop 循环
    b := b + 1;            -- 自增
    while a < b loop
        a := a + 1;        -- dbms_out.put 将要输出的内容放入缓冲区，to_chan 格式化字符串、日期
        dbms_output.put(a || ' * ' || b || ' = ' || to_char(a * b, '00') || '    ');
    end loop;              -- 结束最近的一次循环
    dbms_output.new_line;  -- 输出缓冲区的内容
    a := 0;
  end loop;
end;

/*
***************************
****** OUTPUT RESULT ******
***************************
1 * 1 =  01    
1 * 2 =  02    2 * 2 =  04    
1 * 3 =  03    2 * 3 =  06    3 * 3 =  09    
1 * 4 =  04    2 * 4 =  08    3 * 4 =  12    4 * 4 =  16    
1 * 5 =  05    2 * 5 =  10    3 * 5 =  15    4 * 5 =  20    5 * 5 =  25    
1 * 6 =  06    2 * 6 =  12    3 * 6 =  18    4 * 6 =  24    5 * 6 =  30    6 * 6 =  36    
1 * 7 =  07    2 * 7 =  14    3 * 7 =  21    4 * 7 =  28    5 * 7 =  35    6 * 7 =  42    7 * 7 =  49    
1 * 8 =  08    2 * 8 =  16    3 * 8 =  24    4 * 8 =  32    5 * 8 =  40    6 * 8 =  48    7 * 8 =  56    8 * 8 =  64    
1 * 9 =  09    2 * 9 =  18    3 * 9 =  27    4 * 9 =  36    5 * 9 =  45    6 * 9 =  54    7 * 9 =  63    8 * 9 =  72    9 * 9 =  81
*/
