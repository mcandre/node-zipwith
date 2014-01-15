Given(/^the program has finished$/) do
  @cucumber = `node example.js`
end

Then(/^the output is correct for each test$/) do
  @cucumber.should == "[ 4, 4, 4 ]\n"
end
