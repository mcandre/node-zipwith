Given(/^the program has finished$/) do
  @cucumber = `node example.js`
end

Then(/^the output is correct for each test$/) do
  lines = @cucumber.split("\n");

  lines.length.should == 2

  lines[0].should == "[ 4, 4, 4 ]"
  lines[1].should == "[ [ 1, 3, 5 ], [ 2, 4, 6 ] ]"
end
