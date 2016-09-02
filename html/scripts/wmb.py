with open("https://0racles.githib.io/html/index.html", "r") as my_file:
	print my_file.readline()
	if my_file.closed:
		my_file.close()

with open ("https://0racles.github.io/html/scripts/wmb.txt", "w") as wmb_file:
	wmb_file.write(my_file)
	if wmb_file.closed:
		wmb_file.close()