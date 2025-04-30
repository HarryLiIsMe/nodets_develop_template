all: run1


install:
	pnpm i

update:
	pnpm up

packs:
	pnpm run packs

build:
	pnpm run build
	
obfus:
	pnpm run obfus

build_bin:
	pnpm run build_bin

run1:
	pnpm run main1

run2:
	pnpm run main2

clean:
	pnpm run clean

fmt:
	pnpm run fmt:fix

lint:
	pnpm run lint

test:
	pnpm run test

bench:

coverage:
