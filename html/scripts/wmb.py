with open("https://0racles.githib.io/html/index.html", "r") as my_file:
	print my_file.readline()
	if my_file.closed:
		my_file.close()
