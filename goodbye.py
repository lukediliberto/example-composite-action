import argparse
import json

def main(R1_file):
    res = json.loads(R1_file)
    print(res)
    print("INDEXING!")
    print(res[2]["topping"][3])

if __name__ == '__main__':
    parser=argparse.ArgumentParser(description="a script to do stuff")
    parser.add_argument("R1_file")
    args=parser.parse_args()
    
    main(args.R1_file)
