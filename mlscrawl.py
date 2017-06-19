
from selenium import webdriver

options = webdriver.ChromeOptions()

options.binary_location = '/usr/bin/google-chrome-stable'

options.add_argument('headless')

options.add_argument('window-size=1200x600')

driver = webdriver.Chrome(chrome_options=options)

driver.get('http://www.nmlsconsumeraccess.org/')

driver.implicitly_wait(10)

search = driver.find_element_by_xpath("//input[@id='searchButton']")

zipCode = driver.find_element_by_xpath("//input[@id='searchText']")

zipCode.send_keys('90066')

search.click()

driver.implicitly_wait(10)

driver.get_screenshot_as_file('main-page.png')

